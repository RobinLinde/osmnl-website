<script lang="ts">
	import ActivityPub from '$lib/components/ActivityPub.svelte';
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$t('blog.title')} - {$t('common.title')}</title>
</svelte:head>

<h1>{$t('blog.header')}</h1>

<p>
	{$t('blog.intro')}
</p>

<a href="https://blog.rlin.eu/~/RLin">{$t('blog.link')}</a>

<ActivityPub />

<style lang="scss">
	h1 {
		@apply text-3xl border-b-4 border-gray-300 mb-2;
	}

	p {
		@apply text-lg mb-2;
	}

	a {
		@apply underline hover:no-underline;
	}
</style>
