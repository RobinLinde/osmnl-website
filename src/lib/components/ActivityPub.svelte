<script lang="ts">
	import type { ActivityStreamCollectionPage, ActivityStreamObject } from '$lib/@types/ActivityPub';
	import { onMount } from 'svelte';
	import ExtensibleSvelteMarkdownSvelte from 'svelte-exmarkdown';

	let data: ActivityStreamObject[] = [];

	onMount(async () => {
		const response = await fetch(
			'https://cors.rlin.eu/raw?url=https://blog.rlin.eu/@/Robin/outbox?page=1'
		);
		const responsedata = (await response.json()) as ActivityStreamCollectionPage;
		data = responsedata.items;
	});
</script>

<section class="posts">
	{#each data as item}
		<section class="item">
			<a href={item.object.url}><h1>{item.object.name}</h1></a>
			<ExtensibleSvelteMarkdownSvelte md={item.object.source.content} />
		</section>
	{/each}
</section>

<style lang="scss">
	section.posts {
		@apply flex flex-row flex-wrap;
	}
	section.item {
		@apply bg-gray-200 border-2 border-green-400 rounded-lg my-4 p-4 grow;
	}
	h1 {
		@apply text-3xl font-bold;
	}
	a {
		@apply underline hover:no-underline;
	}
</style>
