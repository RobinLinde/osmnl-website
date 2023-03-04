<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$t('projects.title')} - {$t('common.title')}</title>
</svelte:head>

<h1>{$t('projects.header')}</h1>

<Project id="openpoimap" image="screenshot-openpoimap.png" />
<Project id="osmok" image="screenshot-osmoknl.png" />

<style lang="scss">
	h1 {
		@apply text-3xl border-b-4 border-gray-300 mb-2;
	}
</style>
