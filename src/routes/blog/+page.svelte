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

	// Determine available tags, filter out duplicates
	$: tags = postData[language]
		.map((post) => {
			if (!post.tags) return [];
			return post.tags;
		})
		.flat(1)
		.filter((value, index, self) => {
			return self.indexOf(value) === index;
		});

	let filter = 'all';

	let sort = ['date', 'desc'];

	$: filteredPosts = postData[language].filter((post) => {
		if (filter === 'all') return true;
		return post.tags?.includes(filter);
	});
</script>

<svelte:head>
	<title>{$t('common.blog.title')} - {$t('common.title')}</title>
</svelte:head>

{#if tags}
	{$t('common.blog.filter')}
	<select bind:value={filter}>
		<option value="all">{$t('common.blog.all')}</option>
		{#each tags as tag}
			<option value={tag}>{tag}</option>
		{/each}
	</select>
{/if}

{#if filteredPosts}
	{#each filteredPosts as post}
		<BlogPost
			{post}
			preview={true}
			on:tagClick={(e) => {
				filter = e.detail;
			}}
		/>
	{/each}
{:else}
	<h1>{$t('common.blog.noPosts')}</h1>
{/if}
