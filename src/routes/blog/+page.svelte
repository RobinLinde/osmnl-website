<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { PostsFile } from '$lib/@types/Posts';
	import BlogPost from '$lib/components/BlogPost.svelte';
	import SortInput from '$lib/components/SortInput.svelte';
	import { locale, t } from '$lib/i18n';
	import posts from './posts.json';

	const postData = posts as PostsFile;

	let language = locale.get() in postData ? locale.get() : 'en';
	locale.subscribe(() => {
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

	// Determine filter
	let filter = $page.url.searchParams.get('filter') || 'all';

	// Update filter URL param
	$: {
		// Check if we are in browser context
		if (browser) {
			$page.url.searchParams.set('filter', filter);
			$page.url.searchParams.set('sortBy', sort[0]);
			$page.url.searchParams.set('sortDir', sort[1]);
			console.log(`Update URL: ?${$page.url.searchParams.toString()}`);
			goto(`?${$page.url.searchParams.toString()}`, { replaceState: true });
		}
	}

	let sort: [string, 'asc' | 'desc'] = ['date', 'desc'];

	$: processedPosts = postData[language]
		.filter((post) => {
			if (filter === 'all') return true;
			return post.tags?.includes(filter);
		})
		.sort((a, b) => {
			if (sort[0] === 'date') {
				return sort[1] === 'asc'
					? new Date(a.date || 0).valueOf() - new Date(b.date || 0).valueOf()
					: new Date(b.date || 0).valueOf() - new Date(a.date || 0).valueOf();
			} else if (sort[0] === 'title') {
				return sort[1] === 'asc'
					? a.title.localeCompare(b.title, locale.get())
					: b.title.localeCompare(a.title, locale.get());
			}
			return 0;
		});
</script>

<svelte:head>
	<title>{$t('common.blog.title')} - {$t('common.title')}</title>
</svelte:head>

{#if tags}
	<span class="option">
		{$t('common.blog.filter')}
		<select bind:value={filter} class="tagfilter">
			<option value="all">{$t('common.blog.all')}</option>
			{#each tags as tag}
				<option value={tag}>{tag}</option>
			{/each}
		</select>
	</span>
{/if}

<span class="option">
	{$t('common.blog.sort.label')}
	<SortInput
		options={[
			['date', 'common.blog.sort.date'],
			['title', 'common.blog.sort.title']
		]}
		on:update={(e) => {
			console.log(`Sort by ${e.detail[0]} in ${e.detail[1]} order`);
			sort = e.detail;
		}}
	/>
</span>

{#if processedPosts.length > 0}
	{#each processedPosts as post}
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

<style lang="scss">
	.option {
		@apply p-1;
	}

	.tagfilter {
		@apply border-2 border-gray-300 rounded-md p-1 bg-slate-100;
	}
</style>
