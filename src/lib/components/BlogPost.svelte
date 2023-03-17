<script lang="ts">
	import type { Post } from '$lib/@types/Posts';
	import { locale, t } from '$lib/i18n';
	import { createEventDispatcher } from 'svelte';
	import SvelteExMarkdown from 'svelte-exmarkdown';

	export let post: Post;

	const dispatch = createEventDispatcher();

	function tagClick(e: Event) {
		if (e.type === 'click' || (e.type === 'keydown' && (e as KeyboardEvent).key === 'Enter')) {
			if (e.target instanceof HTMLElement) {
				dispatch('tagClick', e.target.innerText);
			}
		}
	}
</script>

<section class="post">
	<h1>{post.title}</h1>
	{#if post.date}
		<span class="date">{new Date(post.date).toLocaleDateString(locale.get())}</span>
	{/if}
	<span class="content">
		<SvelteExMarkdown md={post.content} />
	</span>
	{#if post.tags && post.tags.length > 0}
		<h2>{$t('common.blog.tags')}</h2>
		<ul>
			{#each post.tags as tag}
				<li on:click={tagClick} on:keydown={tagClick}>{tag}</li>
			{/each}
		</ul>
	{/if}
</section>

<style lang="scss">
	.post {
		@apply border border-gray-300 rounded-lg p-4 my-2;
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

	li {
		@apply text-blue-500 underline hover:text-blue-600 hover:no-underline cursor-pointer;
	}
</style>
