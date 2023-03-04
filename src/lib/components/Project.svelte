<script lang="ts">
	import { t } from '$lib/i18n';
	import Markdown from 'svelte-exmarkdown';

	export let id: string;
	export let image = '';
</script>

<section>
	<span
		><h1>{$t('projects.' + id + '.title')}</h1>

		<Markdown md={$t('projects.' + id + '.description')} /></span
	>

	{#if image}
		<img src={image} alt={$t('projects.' + id + '.title')} />
	{/if}
</section>

<style lang="scss">
	section {
		@apply m-4 border-2 border-gray-300 rounded-lg shadow-lg p-6 flex items-center;
	}
	h1 {
		@apply text-2xl font-bold;
	}
	img {
		@apply rounded-full inline-block h-64 w-64 object-cover object-center;
	}
</style>
