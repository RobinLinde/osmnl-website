<script lang="ts">
	import { t, locale } from '$lib/i18n';
	import index from '../../../node_modules/osm-community-index/dist/resources.json';
	import indexDefaults from '../../../node_modules/osm-community-index/dist/defaults.json';
	import type { DefaultItem, Resource } from '$lib/@types/CommunityIndex';

	export let filter = '';

	const resources: { [key: string]: Resource } = index.resources;
	let keys = Object.keys(resources);
	if (filter.length > 0) {
		keys = keys.filter((key) => resources[key].locationSet.include.includes(filter.toLowerCase()));
	}

	const defaults = indexDefaults.defaults as { [key: string]: DefaultItem };

	let languageNames = new Intl.DisplayNames(locale.get(), { type: 'language' });

	locale.subscribe((value) => {
		languageNames = new Intl.DisplayNames(value, { type: 'language' });
	});

	function createUrl(resource: Resource): string {
		if (resource.strings.url) {
			return resource.strings.url;
		}
		const defaultItem = defaults[resource.type];
		let url = defaultItem.url || '';
		return url
			.replace('{account}', resource.account || '')
			.replace('{community}', resource.strings.community || '');
	}

	function replacePlaceholders(defaultString: string, resource: Resource): string {
		return defaultString
			.replace('{account}', resource.account || '')
			.replace('{community}', resource.strings.community || '')
			.replace('{url}', createUrl(resource));
	}

	function useDefaultItem(item: Resource): DefaultItem {
		let defaultItem = defaults[item.type];
		return {
			name: replacePlaceholders(defaultItem.name, item),
			url: defaultItem.url ? replacePlaceholders(defaultItem.url, item) : undefined,
			description: defaultItem.description
				? replacePlaceholders(defaultItem.description, item)
				: undefined
		};
	}
</script>

<div class="community-list">
	{#each keys as resource}
		<div class="community-item">
			{#if resources[resource].strings.name}
				<a
					class="item-title"
					href={createUrl(resources[resource])}
					target="_blank"
					rel="noreferrer"
				>
					{replacePlaceholders(resources[resource].strings.name || '', resources[resource])}
				</a>
			{:else}
				<a
					class="item-title"
					href={createUrl(resources[resource])}
					target="_blank"
					rel="noreferrer"
				>
					{useDefaultItem(resources[resource]).name}
				</a>
			{/if}

			{#if resources[resource].strings.description}
				{replacePlaceholders(resources[resource].strings.description || '', resources[resource])}
			{:else}
				{useDefaultItem(resources[resource]).description}
			{/if}

			{#if resources[resource].languageCodes}
				<p class="languages">
					{$t('common.spokenLanguages')}: {resources[resource].languageCodes
						?.map((code) => languageNames.of(code))
						.join(', ')}
				</p>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	.community-list {
		@apply grid grid-cols-1 gap-1 my-4;
	}
	.community-item {
		@apply bg-white rounded-lg shadow-lg overflow-hidden p-2;
	}
	.item-title {
		@apply font-bold;
	}
	a {
		@apply underline hover:no-underline hover:text-gray-800;
	}

	.languages {
		@apply text-sm text-gray-600;
	}
</style>
