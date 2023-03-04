<script lang="ts">
	import { goto } from '$app/navigation';

	export let page: string;
	export let name: string;

	const href = `/${page}`;
</script>

<li
	on:click={() => {
		goto(href);
	}}
	on:keypress={(e) => {
		if (e.key === 'Enter') {
			goto(href);
		}
	}}
>
	{name}
</li>

<style lang="scss">
	li {
		@apply float-left text-green-700 text-2xl underline cursor-pointer hover:text-green-800 hover:no-underline m-2;
	}
</style>
