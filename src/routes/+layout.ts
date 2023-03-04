import { browser } from '$app/environment';
import { loadTranslations, locale } from '$lib/i18n';
import type { LayoutLoad } from './$types';

if (browser) {
	const localLang = window.localStorage.getItem('locale');
	if (localLang) {
		locale.set(localLang);
	} else if (navigator.language) {
		localStorage.setItem('locale', navigator.language.split('-')[0]);
		locale.set(navigator.language.split('-')[0]);
	} else {
		locale.set('en');
	}
}

export const load: LayoutLoad = async () => {
	const lang = locale.get();

	await loadTranslations(lang);
	locale.set(lang);

	return {};
};
