<script lang="ts">
	import type { Post } from '$lib/@types/Posts';
	import { locale, t } from '$lib/i18n';
	import SvelteExMarkdown from 'svelte-exmarkdown';

	export let post: Post;
</script>

<section class="post">
	<h1>{post.title}</h1>
	{#if post.date}
		<span class="date">{new Date(post.date).toLocaleDateString(locale.get())}</span>
	{/if}
	<span class="content">
		<SvelteExMarkdown md={post.content} />
	</span>
	{#if post.tags}
		<h2>{$t('common.blog.tags')}</h2>
		<ul>
			{#each post.tags as tag}
				<li>{tag}</li>
			{/each}
		</ul>
	{/if}
</section>

<style lang="scss">
	.post {
		@apply border border-gray-300 rounded-lg p-4;
		h1 {
			@apply text-2xl font-bold;
		}
		.date {
			@apply text-gray-600;
		}
	}

	.content {
		@apply block my-3;
		:global(h2) {
			@apply text-xl font-bold;
		}
	}
</style>
