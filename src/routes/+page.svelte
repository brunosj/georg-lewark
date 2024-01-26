<script lang="ts">
	export let data;

	import type { Project } from '$lib/types/types';
	import SEO from '$lib/components/SEO/index.svelte';
	import ProjectCard from '$components/Projects/ProjectCard.svelte';
	import Projects from '$components/Projects/Projects.svelte';

	// SEO
	let title = '';
	let metadescription = '';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		}
	];
	const seoProps = {
		breadcrumbs,
		title,
		metadescription,
		slug: ''
	};

	// Logic

	let projects: Project[];
	$: projects = data.projects;
</script>

<SEO {...seoProps} />
<Projects {projects} />

<style>
</style>
