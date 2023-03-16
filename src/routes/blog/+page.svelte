<script lang="ts">
	import type { PostsFile } from '$lib/@types/Posts';
	import BlogPost from '$lib/components/BlogPost.svelte';
	import { locale, t } from '$lib/i18n';
	import posts from './posts.json';

	const postData = posts as PostsFile;

	let language = locale.get() in postData ? locale.get() : 'en';
	locale.subscribe((value) => {
		language = locale.get() in postData ? locale.get() : 'en';
	});
</script>

<svelte:head>
	<title>{$t('common.blog.title')} - {$t('common.title')}</title>
</svelte:head>

{#if postData[language]}
	{#each postData[language] as post}
		<BlogPost {post} />
	{/each}
{:else}
	<h1>{$t('common.blog.noPosts')}</h1>
{/if}
