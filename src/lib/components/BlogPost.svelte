<script lang="ts">
	import type { Post } from '$lib/@types/Posts';
	import { locale, t } from '$lib/i18n';
	import { createEventDispatcher } from 'svelte';
	import SvelteExMarkdown from 'svelte-exmarkdown';

	export let post: Post;
	export let preview: boolean = false;

	const dispatch = createEventDispatcher();

	function tagClick(e: Event) {
		if (e.type === 'click' || (e.type === 'keydown' && (e as KeyboardEvent).key === 'Enter')) {
			if (e.target instanceof HTMLElement) {
				dispatch('tagClick', e.target.innerText);
			}
		}
	}

	$: md = preview
		? post.content.split('<!-- more -->')[0]
		: post.content.replace(/<!-- more -->/g, '');
</script>

<section class="post">
	<h1>{post.title}</h1>
	{#if post.date}
		<span class="date">{new Date(post.date).toLocaleDateString(locale.get())}</span>
	{/if}
	<span class="content">
		<SvelteExMarkdown {md} />
	</span>
	{#if preview}
		<a href={`/blog/${post.slug}`} class="readMore">{$t('common.blog.readMore')}</a>
	{/if}
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

	.readMore {
		@apply block my-3 text-white bg-blue-500 rounded-lg p-2 w-fit hover:bg-blue-900;
	}
</style>
