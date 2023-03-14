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
	<script>
		if (window.netlifyIdentity) {
			window.netlifyIdentity.on('init', (user) => {
				if (!user) {
					window.netlifyIdentity.on('login', () => {
						document.location.href = '/admin/';
					});
				}
			});
		}
	</script>
</svelte:head>
<div>
	<header>
		<Header />
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<Footer />
	</footer>
</div>

<style lang="scss">
	:global(body) {
		@apply bg-gray-100;
	}

	div {
		@apply flex flex-col min-h-screen;
	}

	main {
		@apply p-16 text-lg lg:px-32 xl:px-64 flex-grow;
	}

	footer {
		@apply bottom-0 w-full;
	}
</style>
