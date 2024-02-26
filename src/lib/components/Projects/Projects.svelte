<script lang="ts">
	export let projects: Project[];

	import type { Project } from '$lib/types/types';
	import ProjectCard from '$components/Projects/ProjectCard.svelte';
	import { fly, slide, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';

	let animate = false;

	let filteredProjects: Project[];
	let selectedFilter: string;
	$: filteredProjects = projects.sort((a, b) => (a.order < b.order ? 1 : -1));
	$: selectedFilter = 'all';

	function filterByType(type: string) {
		filteredProjects = projects.filter((project) => project.type === type);
		selectedFilter = type;
	}

	onMount(() => {
		animate = true;
	});
</script>

<article id="projects" class="page-container">
	{#if animate}
		<div class="filter-container">
			<div
				class="filters"
				transition:fade={{
					duration: 500,
					easing: cubicInOut,
					delay: 200
				}}>
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
				<button on:click={() => filterByType('other')}>
					<p class:selected={selectedFilter === 'other'}>other</p>
				</button>
			</div>
		</div>
	{/if}
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
		/* background-color: var(--color-gray); */
		margin: auto;
		display: inline-flex;
		padding: 0.5rem 2rem;
		gap: 0.8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0px;
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
