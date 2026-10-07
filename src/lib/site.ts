/**
 * Canonical origin for the site. Override per environment with PUBLIC_SITE_URL
 * (e.g. a Vercel preview URL before the domain is pointed at Vercel).
 */
export const SITE_URL = (
  import.meta.env.PUBLIC_SITE_URL ?? 'https://protxempower.com'
).replace(/\/$/, '');

/** Business details shared by the layout, header, footer and contact page. */
export const BUSINESS = {
  name: 'Protect and Empower',
  tagline: 'Fighting for Dignity in the Workplace',
  phone: '+18182090438',
  phoneDisplay: '(818) 209-0438',
  email: 'support@protxempower.com',
  address: {
    street: '1320 South J Street',
    city: 'Oxnard',
    region: 'CA',
    postalCode: '93033',
    country: 'US',
  },
  hours: [
    { days: 'Monday to Friday', time: '9:00 am to 6:00 pm' },
    { days: 'Saturday and Sunday', time: 'Closed' },
  ],
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;
