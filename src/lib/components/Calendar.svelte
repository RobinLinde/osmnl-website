<script lang="ts">
	import { t } from '$lib/i18n';
	import { onMount } from 'svelte';
	import type { Event } from '$lib/@types/OSMcal';

	export let filter = '';
	export let items = 5;

	let data: Event[] = [];

	onMount(async () => {
		const url =
			filter === ''
				? 'https://osmcal.org/api/v2/events/'
				: `https://osmcal.org/api/v2/events/?in=${filter}`;
		const response = await fetch(url);
		data = (await response.json()) as Event[];
		data = data.slice(0, items);
		console.log(data);
	});
</script>

<section>
	<h1>{$t('common.events.upcoming')}</h1>
	{#if data.length === 0}
		<p>{$t('common.events.noEvents')}</p>
	{:else}
		{#each data as event}
			<div>
				<a href={event.url}><h3>{event.name}</h3></a>
				<p>{event.location.short} - {event.date.human}</p>
			</div>
		{/each}
	{/if}
</section>

<style lang="scss">
	section {
		@apply bg-gray-900 border-2 border-green-400 rounded-lg my-4 p-4;
	}
	h1 {
		@apply text-xl font-bold text-gray-500;
	}
	h3 {
		@apply text-lg font-bold text-gray-300;
	}
	p {
		@apply text-gray-400;
	}
	a {
		@apply underline hover:no-underline;
	}
</style>
