<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { t } from '$lib/i18n';

	/**
	 * Options for the sort input as an array of tuples,
	 * where the first element is the value and the second element is the id of the translated string or the string itself.
	 */
	export let options: [string, string][];
	export let direction: 'asc' | 'desc' = 'desc';

	let checkbox: boolean;
	let select: string;

	// Initialize checkbox
	$: checkbox = direction === 'asc';

	const dispatcher = createEventDispatcher();

	const handleUpdate = () => {
		direction = checkbox ? 'asc' : 'desc';
		dispatcher('update', [select, direction]);
	};
</script>

<span class="sort">
	<span class="checkbox">
		<input
			type="checkbox"
			id="dir"
			bind:checked={checkbox}
			on:change={handleUpdate}
			aria-label={$t('common.sort.direction')}
		/>
		<span class="arrow arrow-up" aria-label={$t('common.blog.sort.direction.ascending')}
			>&#8593;</span
		>
		<span class="arrow arrow-down" aria-label={$t('common.blog.sort.direction.descending')}
			>&#8595;</span
		>
	</span>
	<select id="sortby" bind:value={select} on:change={handleUpdate}>
		{#each options as option}
			<option value={option[0]}>{$t(option[1])}</option>
		{/each}
	</select>
</span>

<style lang="scss">
	.sort {
		@apply border-2 border-gray-300 rounded-md p-1 bg-slate-100;

		.checkbox {
			@apply relative;
		}

		.arrow {
			// Overlay the arrows on top of each other, as well as the checkbox
			@apply text-gray-500 absolute top-0 left-0 pointer-events-none z-10 hidden w-5 h-5;
		}

		input {
			// Make the checkbox invisible, but still clickable
			// We also need to make it the same size as the arrows
			@apply cursor-pointer -z-10 opacity-0 w-5 h-5;

			// If it's checked, show the up the corresponding arrow
			&:checked {
				~ .arrow-up {
					@apply block;
				}
				~ .arrow-down {
					@apply hidden;
				}
			}

			// If it's not checked, show the down arrow
			&:not(:checked) {
				~ .arrow-up {
					@apply hidden;
				}
				~ .arrow-down {
					@apply block;
				}
			}
		}

		select {
			@apply border-none bg-slate-100 rounded-md;
		}
	}
</style>
