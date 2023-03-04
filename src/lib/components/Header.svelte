<script lang="ts">
	import { t } from '$lib/i18n';

	import Calendar from '$lib/components/Calendar.svelte';
	import LanguageSwitch from '$lib/components/LanguageSwitch.svelte';
	import Navigation from '$lib/components/navigation/Navigation.svelte';
</script>

<section>
	<img src="/logo.svg" alt={$t('common.title')} />

	<span>
		<Navigation />
		<Calendar filter="nl" items={1} />
	</span>

	<LanguageSwitch />
</section>

<style lang="scss">
	section {
		@apply bg-gray-800 text-white border-b-4 border-green-400 flex flex-row justify-between items-center p-4 px-16;
	}
	span {
		@apply flex flex-col justify-between items-center;
	}
</style>
