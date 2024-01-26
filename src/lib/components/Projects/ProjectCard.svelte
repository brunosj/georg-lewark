<script lang="ts">
	export let item: Project;

	import type { Project } from '$lib/types/types';
	import { onMount } from 'svelte';
	import Img from '@zerodevx/svelte-img';
	import { slide, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { getProjectImage, getProjectStills } from '$lib/utils/getProjectVisuals';

	let { name, year, type, description, slug } = item;

	let projectImage: string;
	let projectStills: string[] = [];

	let isHovered = false;

	function handleMouseEnter() {
		isHovered = !isHovered;
	}

	function handleMouseOut() {
		isHovered = false;
	}

	onMount(() => {
		projectImage = getProjectImage(slug);
		projectStills = getProjectStills(slug);
	});
</script>

<li>
	<a href={`projects/${slug}`} on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseOut}>
		<div class="content">
			<div class="stills">
				{#each projectStills as still, index}
					<!-- <div class:mobile={index % 2 === 1}> -->
					<div>
						<Img
							src={still}
							alt={name || ''}
							style="border-top-right-radius:6px;border-top-left-radius:6px;" />
					</div>
				{/each}
			</div>
			<div class="layer hidden-mobile" class:display={isHovered}>
				{#if isHovered}
					<div
						class="title"
						transition:slide={{
							duration: 500,
							easing: cubicInOut,
							delay: 0,
							axis: 'y'
						}}>
						<h4>{name}</h4>
					</div>
				{/if}
			</div>
			<div class="hidden-desktop container">
				<div class="mobile-title">
					<p>{name}</p>
				</div>
			</div>
		</div>
	</a>
</li>

<style>
	li {
		position: relative;
		list-style: none;
		background-color: var(--color-gray);
		width: 90%;
		margin: auto;
		border-radius: 6px;
		margin-bottom: 1rem;
	}

	.content {
		display: flex;
		flex-direction: column;
	}

	.stills {
		display: flex;
		margin: auto;
	}

	.layer {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
		transition: all 0.3s ease-in-out;
	}

	.title {
		background-color: var(--color-black);
		border-radius: 12px;
		padding: 1rem;
	}

	.mobile-title {
		margin-top: 1rem;
		margin-bottom: 1rem;
		margin-left: auto;
		display: flex;
	}

	.mobile-title p {
		font-weight: 500;
	}

	li:nth-child(odd) .mobile-title p {
		margin-left: auto;
	}

	.display {
		opacity: 1;
	}

	li:hover .stills {
		opacity: 0.5;
	}

	.stills {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		opacity: 1;
		transition: all 0.3s ease-in-out;
	}

	.mobile {
		display: none;
	}

	@media (min-width: 50em) {
		.mobile {
			display: block;
		}

		li {
			width: 100%;
			border-radius: 0px;
			margin-bottom: 2rem;
		}
	}
</style>
