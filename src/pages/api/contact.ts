import type { APIRoute } from 'astro';
import { EMAIL_CONFIG, hasEmailConfig, isValidEmail, missingEmailConfig, sendEmail } from '../../lib/email';
import { createRateLimiter, getClientKey } from '../../lib/rateLimit';
import { BUSINESS } from '../../lib/site';

export const prerender = false;

const json = (payload: Record<string, unknown>, status = 200) => {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
};

const requiredFields = ['name', 'email', 'message'] as const;

// Bots fill every field they find; the form keeps this one off-screen and empty.
const HONEYPOT_FIELD = 'company-website';

const SUCCESS_MESSAGE = 'Thank you for contacting us. We will get back to you as soon as possible.';
const FALLBACK = `Please call us at ${BUSINESS.phoneDisplay}.`;

const isRateLimited = createRateLimiter({ max: 3, windowMs: 10 * 60 * 1000 });

export const POST: APIRoute = async ({ request }) => {
  let payload: Record<string, unknown>;

  try {
    const rawBody = await request.text();
    if (!rawBody.trim()) {
      return json({ success: false, message: 'Request body is required.' }, 400);
    }

    payload = JSON.parse(rawBody.replace(/^﻿/, '')) as Record<string, unknown>;
  } catch {
    return json({ success: false, message: 'Invalid JSON body.' }, 400);
  }

  // Report success so bots get no signal about why nothing happened.
  if (String(payload[HONEYPOT_FIELD] ?? '').trim()) {
    console.warn('Contact form honeypot triggered.');
    return json({ success: true, message: SUCCESS_MESSAGE });
  }

  for (const field of requiredFields) {
    if (!String(payload[field] ?? '').trim()) {
      return json({ success: false, message: `Missing required field: ${field}` }, 400);
    }
  }

  const name = String(payload.name).trim();
  const email = String(payload.email).trim();
  const phone = String(payload.phone ?? '').trim() || 'Not provided';
  const message = String(payload.message).trim();

  if (!isValidEmail(email)) {
    return json({ success: false, message: 'Please enter a valid email address.' }, 400);
  }

  if (message.length > 5000) {
    return json({ success: false, message: 'Message is too long. Please keep it under 5000 characters.' }, 400);
  }

  if (isRateLimited(getClientKey(request))) {
    return json({ success: false, message: `You've sent several messages already. ${FALLBACK}` }, 429);
  }

  if (!hasEmailConfig()) {
    console.error('Contact email not configured. Missing:', missingEmailConfig().join(', '));
    return json({ success: false, message: `Our message service is not available right now. ${FALLBACK}` }, 503);
  }

  const text = [
    'New contact form submission from protxempower.com.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const result = await sendEmail({
      to: EMAIL_CONFIG.contactEmailTo,
      subject: `New Contact Message - ${name}`,
      text,
      replyTo: email,
    });

    if (!result.sent) {
      console.error('Contact email not sent:', result.reason);
      return json({ success: false, message: `Unable to send your message right now. ${FALLBACK}` }, 503);
    }

    return json({ success: true, message: SUCCESS_MESSAGE });
  } catch (error) {
    console.error('Contact email send failed:', error);
    return json({ success: false, message: `Unable to send your message right now. ${FALLBACK}` }, 500);
  }
};

export const GET: APIRoute = () => {
  return json({ success: false, message: 'Method not allowed.' }, 405);
};
