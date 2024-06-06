<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$t('home.title')} - {$t('common.title')}</title>
</svelte:head>

<h1><img src="/osm-logo.svg" alt="OpenStreetMap" class="icon" />OpenStreetMap</h1>
<p>
	{$t('home.intro')}
</p>

<h1><img src="/logo.svg" alt={$t('common.title')} class="icon" />{$t('common.title')}</h1>

<p>
	{$t('home.about')}
</p>

<style lang="postcss">
	h1 {
		@apply text-3xl border-b-4 border-gray-300 mb-2;
	}

	p {
		@apply text-lg mb-16;
	}

	.icon {
		@apply w-12 h-12 inline-block mr-2;
	}
</style>
