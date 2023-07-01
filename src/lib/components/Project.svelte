<script lang="ts">
	import { t } from '$lib/i18n';
	import Markdown from 'svelte-exmarkdown';

	export let id: string;
	export let image = '';
</script>

<section>
	<span class="project">
		<h1>{$t('projects.' + id + '.title')}</h1>

		<Markdown md={$t('projects.' + id + '.description')} />
	</span>

	{#if image}
		<span class="image">
			<img src={image} alt={$t('projects.' + id + '.title')} />
		</span>
	{/if}
</section>

<style lang="scss">
	section {
		@apply m-4 border-2 border-gray-300 rounded-lg shadow-lg p-6 flex flex-wrap;
	}
	h1 {
		@apply text-2xl font-bold;
	}

	span.project {
		@apply flex-1;

		:global(a) {
			@apply text-blue-600 underline hover:text-blue-700 hover:no-underline;
		}
	}
	span.image {
		img {
			@apply rounded-full object-cover object-center w-64 h-64;
		}
	}
</style>
