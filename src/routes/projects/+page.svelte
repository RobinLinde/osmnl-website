<script lang="ts">
	import type { ProjectsFile } from '$lib/@types/Projects';
	import Project from '$lib/components/Project.svelte';
	import { locale, t } from '$lib/i18n';
	import projects from './projects.json';

	const projectData = projects as ProjectsFile;

	let language = locale.get() in projectData ? locale.get() : 'en';
	locale.subscribe(() => {
		language = locale.get() in projectData ? locale.get() : 'en';
	});

	$: filteredProjects = projectData[language];
</script>

<svelte:head>
	<title>{$t('projects.title')} - {$t('common.title')}</title>
</svelte:head>

<h1>{$t('projects.header')}</h1>

{#each filteredProjects as project}
	<Project {project}/>
{/each}

<style lang="scss">
	h1 {
		@apply text-3xl border-b-4 border-gray-300 mb-2;
	}
</style>
