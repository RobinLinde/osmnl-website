<script lang="ts">
	import CommunityIndex from '$lib/components/CommunityIndex.svelte';
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$t('contact.title')} - {$t('common.title')}</title>
</svelte:head>

<h1>{$t('contact.header')}</h1>

<p>
	{$t('contact.intro')}
</p>
<p>
	<span class="email">{$t('contact.donation')}: </span>
	<a href="mailto:donaties@openstreetmap.nl">donaties@openstreetmap.nl</a>
	<br />
	<span class="email">{$t('contact.press')}: </span>
	<a href="mailto:pers@openstreetmap.nl">pers@openstreetmap.nl</a>
</p>
<p>
	{$t('contact.tagline')}
</p>

<CommunityIndex filter="nl" />

<p>
	{$t('contact.worldwide')}
</p>

<CommunityIndex filter="001" />

<style lang="postcss">
	h1 {
		@apply text-3xl border-b-4 border-gray-300 mb-2;
	}

	p {
		@apply text-lg mb-2;
	}

	.email {
		@apply font-bold;
	}

	a {
		@apply text-blue-600 underline hover:text-blue-700 hover:no-underline;
	}
</style>
