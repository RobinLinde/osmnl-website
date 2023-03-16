<script lang="ts">
	import { t } from '$lib/i18n';
	import NavigationItem from '$lib/components/navigation/NavigationItem.svelte';
</script>

<nav>
	<ul>
		<NavigationItem page="" name={$t('common.home')} />
		<NavigationItem page="blog" name={$t('common.blog.title')} />
		<NavigationItem page="projects" name={$t('common.projects')} />
		<NavigationItem page="contact" name={$t('common.contact')} />
		<NavigationItem page="support" name={$t('common.support')} />
	</ul>
</nav>
