/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly SMTP_HOST?: string;
	readonly SMTP_PORT?: string;
	readonly SMTP_SECURE?: string;
	readonly SMTP_USER?: string;
	readonly SMTP_PASS?: string;
	readonly SMTP_FROM_EMAIL?: string;
	readonly SMTP_FROM_NAME?: string;
	readonly CONTACT_EMAIL_TO?: string;
	readonly PUBLIC_SITE_URL?: string;
}
