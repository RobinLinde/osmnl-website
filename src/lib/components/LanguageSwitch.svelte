<script lang="ts">
	import { browser } from '$app/environment';
	import { locales, locale, loadTranslations } from '$lib/i18n';

	locale.subscribe((value) => {
		if (browser) {
			localStorage.setItem('locale', value);
			loadTranslations(value);
		}
	});
</script>

<select bind:value={$locale}>
	{#each locales.get() as localeItem}
		<option value={localeItem}>{localeItem}</option>
	{/each}
</select>

<style lang="scss">
	select {
		@apply bg-gray-600 border border-gray-500 rounded-md shadow-sm py-2 px-3 text-green-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm;
	}
</style>
