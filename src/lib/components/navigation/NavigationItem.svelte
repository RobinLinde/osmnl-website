<script lang="ts">
	import { goto } from '$app/navigation';

	export let page: string;
	export let name: string;

	const href = `/${page}`;
</script>

<li>
	<span
		on:click={() => {
			goto(href);
		}}
		on:keypress={(e) => {
			if (e.key === 'Enter') {
				goto(href);
			}
		}}
		role="button"
		tabindex="0">{name}</span
	>
</li>

<style lang="postcss">
	li {
		@apply float-left text-green-400 text-2xl underline cursor-pointer hover:text-green-800 hover:no-underline m-2;
	}

	span:focus {
		@apply outline-dashed outline-2 outline-green-400 rounded-md;
	}
</style>
