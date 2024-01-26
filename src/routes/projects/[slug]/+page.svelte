<script lang="ts">
	export let data;

	import type { Project } from '$lib/types/types';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import SEO from '$components/SEO/SEO.svelte';
	import Img from '@zerodevx/svelte-img';
	import ExternalLink from '$components/Link/ExternalLink.svelte';

	import { getProjectImage, getProjectStills } from '$lib/utils/getProjectVisuals';

	let item: Project = data.meta;
	let projectImage: string;
	let projectStills: string[] = [];

	let { name, url, type, description, slug } = item;

	onMount(() => {
		projectImage = getProjectImage(slug);
		projectStills = getProjectStills(slug);
	});
</script>

<SEO title={`${name} | Georg Lewark`} {description} />

<article>
	<section class="grid container">
		<aside class="fixed">
			<div class="poster">
				<Img src={projectImage} alt={name} />
			</div>
			{#if url !== ''}
				<div class="link">
					<ExternalLink ariaLabel="Watch film" href={url}>Watch film</ExternalLink>
				</div>
			{/if}
		</aside>
		<div class="content">
			<div class="markdown">
				<svelte:component this={data.content} />
			</div>
		</div>
	</section>
	<section class="stills">
		{#each projectStills as still}
			<Img src={still} alt={name || ''} />
		{/each}
	</section>
</article>

<style>
	.markdown {
		margin: 3rem auto;
		width: 100%;
		overflow-wrap: break-word;
	}

	.fixed {
		display: none;
	}

	.grid {
		margin-bottom: 3rem;
	}

	.poster {
		width: 100%;
		margin: auto;
	}

	.link {
		display: flex;
		justify-content: center;
		margin: 2rem auto;
	}
	.stills {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		opacity: 1;
		transition: all 0.3s ease-in-out;
	}

	@media (min-width: 50em) {
		.grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 6rem;
		}

		.content {
			grid-column: 2 / 4;
		}

		.fixed {
			display: inline-block;
			margin-top: 4rem;
			position: sticky;
			top: 7rem;
			align-self: flex-start;
		}
	}
</style>
