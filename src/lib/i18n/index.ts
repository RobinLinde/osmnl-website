import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';

export const defaultLocale = 'en';

const config: Config = {
	initLocale: defaultLocale,
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		},
		{
			locale: 'nl',
			key: 'common',
			loader: async () => (await import('./nl/common.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'nl',
			key: 'home',
			loader: async () => (await import('./nl/home.json')).default
		},
		{
			locale: 'en',
			key: 'contact',
			loader: async () => (await import('./en/contact.json')).default
		},
		{
			locale: 'nl',
			key: 'contact',
			loader: async () => (await import('./nl/contact.json')).default
		},
		{
			locale: 'en',
			key: 'support',
			loader: async () => (await import('./en/support.json')).default
		},
		{
			locale: 'nl',
			key: 'support',
			loader: async () => (await import('./nl/support.json')).default
		},
		{
			locale: 'en',
			key: 'projects',
			loader: async () => (await import('./en/projects.json')).default
		},
		{
			locale: 'nl',
			key: 'projects',
			loader: async () => (await import('./nl/projects.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
