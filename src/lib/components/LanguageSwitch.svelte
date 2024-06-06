<script lang="ts">
	import { browser } from '$app/environment';
	import { locales, locale, loadTranslations } from '$lib/i18n';

	let languageNames = new Intl.DisplayNames(locale.get(), { type: 'language' });

	locale.subscribe((value) => {
		if (browser) {
			localStorage.setItem('locale', value);
			loadTranslations(value);
		}
		languageNames = new Intl.DisplayNames(value, { type: 'language' });
	});
</script>

<select bind:value={$locale}>
	{#each locales.get() as localeItem}
		{#if localeItem === $locale}
			<option value={localeItem}>
				{languageNames.of(localeItem)}
			</option>
		{:else}
			<option value={localeItem}>
				{new Intl.DisplayNames(localeItem, { type: 'language' }).of(localeItem)} ({languageNames.of(
					localeItem
				)})
			</option>
		{/if}
	{/each}
</select>

<style lang="postcss">
	select {
		@apply bg-gray-600 border border-gray-500 rounded-md shadow-sm py-2 px-3 text-green-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm;
	}
</style>
