<script lang="ts">
	export let data;

	import type { Project } from '$lib/types/types';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import SEO from '$components/SEO/SEO.svelte';
	import Img from '@zerodevx/svelte-img';
	import ExternalLink from '$components/Link/ExternalLink.svelte';
	import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';
	import { getProjectImage, getProjectStills } from '$lib/utils/getProjectVisuals';

	let item: Project = data.meta;
	let projectImage: string;
	let projectStills: string[] = [];

	let { name, url, type, description, slug } = item;

	onMount(() => {
		projectImage = getProjectImage(slug);
		projectStills = getProjectStills(slug);
	});

	let lightboxProgrammaticController;
</script>

<SEO title={`${name} | Georg Lewark`} {description} />

<article>
	<section class="stills">
		<LightboxGallery
			arrowsConfig={{ color: 'transparent', character: 'loop', enableKeyboardControl: true }}>
			<svelte:fragment slot="thumbnail">
				{#each projectStills as still, i}
					<GalleryThumbnail title="name" id={i}>
						<Img src={still} alt={name || ''} />
					</GalleryThumbnail>
				{/each}
			</svelte:fragment>

			{#each projectStills as still}
				<GalleryImage title={'Name'} description="image">
					<Img src={still} alt={name || ''} />
				</GalleryImage>
			{/each}
		</LightboxGallery>
	</section>
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
		display: flex;
		flex-wrap: wrap;
		opacity: 1;
		transition: all 0.3s ease-in-out;
	}

	@media (min-width: 50em) {
		.grid {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 6rem;
		}

		.content {
			grid-column: 2 / 5;
			width: 75%;
			margin: auto;
		}

		.stills {
			flex-wrap: nowrap;
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
