<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$t('support.title')} - {$t('common.title')}</title>
</svelte:head>

<h1>{$t('support.header')}</h1>

<p>
	{$t('support.intro')}
	<a href="https://opengeo.nl/#contact">{$t('common.opengeo')}</a>
</p>
<p>
	{$t('support.international')}
	<a href="https://osmfoundation.org/">{$t('common.osmf')}</a>
</p>

<style lang="scss">
	h1 {
		@apply text-3xl border-b-4 border-gray-300 mb-2;
	}

	p {
		@apply text-lg mb-2;
	}

	a {
		@apply text-blue-600 underline hover:text-blue-700 hover:no-underline;
	}
</style>
