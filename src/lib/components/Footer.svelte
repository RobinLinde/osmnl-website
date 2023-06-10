<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<section>
	<span>
		<h1>{$t('common.title')}</h1>
		<p>{$t('common.about')}</p>
	</span>
	<span>
		<h2>{$t('common.partners.title')}</h2>
		<ul>
			<li>
				<a href="https://opengeo.nl" target="_blank" rel="noreferrer">{$t('common.opengeo')}</a>
			</li>
			<li>
				<a href="https://oxilion.nl" target="_blank" rel="noreferrer">{$t('common.oxilion')}</a>
			</li>
		</ul>
	</span>
</section>

<style lang="scss">
	section {
		@apply bg-gray-800 text-white border-t-4 border-green-400 flex flex-row justify-between items-center p-4 px-16 w-full flex-wrap;
	}

	h1 {
		@apply text-2xl font-bold;
	}

	h2 {
		@apply text-xl font-bold;
	}

	a {
		@apply underline text-gray-300 hover:no-underline hover:text-gray-400 py-4;
	}
</style>
