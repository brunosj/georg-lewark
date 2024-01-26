<script lang="ts">
	export let projects: Project[];

	import type { Project } from '$lib/types/types';
	import ProjectCard from '$components/Projects/ProjectCard.svelte';

	let filteredProjects: Project[];
	let selectedFilter: string;
	$: filteredProjects = projects;
	$: selectedFilter = 'all';

	function filterByType(type: string) {
		filteredProjects = projects.filter((project) => project.type === type);
		selectedFilter = type;
	}
</script>

<article id="projects" class="page-container">
	<div class="filter-container">
		<div class="filters">
			<button
				on:click={() => {
					filteredProjects = projects;
					selectedFilter = 'all';
				}}>
				<p class:selected={selectedFilter === 'all'}>all films</p>
			</button>
			<button on:click={() => filterByType('fiction')}>
				<p class:selected={selectedFilter === 'fiction'}>fiction</p>
			</button>
			<button on:click={() => filterByType('documentary')}>
				<p class:selected={selectedFilter === 'documentary'}>documentary</p>
			</button>
		</div>
	</div>
	{#key filteredProjects}
		{#each filteredProjects as item, i}
			<ProjectCard {item} />
		{/each}
	{/key}
</article>

<style>
	.filter-container {
		margin-bottom: 3rem;
		display: inline-flex;
		width: 100%;
	}

	.filters {
		background-color: var(--color-gray);
		margin: auto;
		display: inline-flex;
		padding: 0.5rem 2rem;
		gap: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 12px;
	}

	button {
		background-color: transparent;
		color: var(--color-white);
		cursor: pointer;
		transition: all 0.3s ease-in-out;
	}

	p {
		border-bottom: 1px solid var(--color-black);
		border-bottom-color: var(--color-black);
		display: inline-block;
		transition: border 0.2s linear;
		opacity: 0.5;
	}

	p:hover {
		border-bottom-color: #d7d2d2;
	}

	p.selected {
		opacity: 1;
	}

	@media (min-width: 50em) {
		.filters {
			gap: 2rem;
		}
	}
</style>
