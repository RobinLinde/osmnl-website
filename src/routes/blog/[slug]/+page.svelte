<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Post } from '$lib/@types/Posts';
	import BlogPost from '$lib/components/BlogPost.svelte';
	import { locale, t } from '$lib/i18n';
	import type { PageData } from './$types';

	export let data: PageData;

	let post: Post & { language: string };
	locale.subscribe((value) => {
		if (data.props?.posts) post = data.props?.posts.filter((post) => post.language == value)[0];
	});

	let languageNames = new Intl.DisplayNames(locale.get(), { type: 'language' });

	locale.subscribe((value) => {
		languageNames = new Intl.DisplayNames(value, { type: 'language' });
	});
</script>

<svelte:head>
	{#if post}
		<title>{post.title} - {$t('common.title')}</title>
	{:else}
		<title>{$t('common.blog.notAvailable')} - {$t('common.title')}</title>
	{/if}
</svelte:head>

{#if data.error}
	{data.error}
{:else if post}
	<BlogPost
		{post}
		on:tagClick={(e) => {
			goto(`/blog?filter=${e.detail}`);
		}}
	/>
{:else if data.props.languages.length > 0}
	{$t('common.blog.otherLanguages')}
	<ul>
		{#each data.props.languages as language}
			<li>
				<button
					on:click={() => {
						locale.set(language);
					}}
					on:keydown={(e) => {
						if (e.key === 'Enter') locale.set(language);
					}}
				>
					{languageNames.of(language)}
				</button>
			</li>
		{/each}
	</ul>
{/if}

<style lang="postcss">
	li {
		@apply text-blue-600 underline hover:text-blue-700 hover:no-underline cursor-pointer;
	}
</style>
