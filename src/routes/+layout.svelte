<script lang="ts">
	import { locales } from '$lib/i18n';

	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	{#each $locales as locale}
		<link rel="alternate" hreflang={locale} href={`/${locale}/`} />
	{/each}
</svelte:head>

<header>
	<Header />
</header>

<main>
	<slot />
</main>

<footer>
	<Footer />
</footer>

<style lang="scss">
	:global(body) {
		@apply bg-gray-100;
	}

	main {
		@apply p-16 text-lg lg:px-32 xl:px-64;
	}

	footer {
		@apply bottom-0 w-full static;
	}
</style>
