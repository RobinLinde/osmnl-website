<script lang="ts">
	import type { Project } from '$lib/@types/Projects';
	import Markdown from 'svelte-exmarkdown';

	export let project: Project;
</script>

<section>
	<span class="project">
		<h1>{project.title}</h1>

		<Markdown md={project.content} />
	</span>

	{#if project.image}
		<span class="image">
			<img src={project.image} alt={project.title} />
		</span>
	{/if}
</section>

<style lang="postcss">
	section {
		@apply m-4 border-2 border-gray-300 rounded-lg shadow-lg p-6 flex flex-wrap;
	}
	h1 {
		@apply text-2xl font-bold;
	}

	span.project {
		@apply flex-1;

		a {
			@apply text-blue-600 underline hover:text-blue-700 hover:no-underline;
		}
	}
	span.image {
		img {
			@apply rounded-full object-cover object-center w-64 h-64;
		}
	}
</style>
