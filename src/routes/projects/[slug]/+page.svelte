<script lang="ts">
	export let data;

	import type { Project } from '$lib/types/types';
	import { onMount } from 'svelte';
	import SEO from '$components/SEO/SEO.svelte';
	import Img from '@zerodevx/svelte-img';
	import ExternalLink from '$components/Link/ExternalLink.svelte';
	import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';
	import { getProjectImage, getProjectStills } from '$lib/utils/getProjectVisuals';

	let item: Project = data.meta;
	let projectImage: string = '';
	let projectStills: string[] = [];

	let {
		name,
		url,
		type,
		subtype,
		producer,
		director,
		writer,
		description,
		year,
		slug,
		color,
		length,
		cinematography
	} = item;

	onMount(async () => {
		projectImage = await getProjectImage(slug);
		projectStills = await getProjectStills(slug);
	});
</script>

<SEO title={`${name} | Georg Lewark`} {description} />

<article>
	<section class="stills">
		<LightboxGallery
			arrowsConfig={{ color: 'transparent', character: 'loop', enableKeyboardControl: true }}>
			<svelte:fragment slot="thumbnail">
				{#each projectStills as still, i}
					<GalleryThumbnail title="name" id={i}>
						<div class="still">
							<Img src={still} alt={name || ''} />
						</div>
					</GalleryThumbnail>
				{/each}
			</svelte:fragment>

			{#each projectStills as still}
				<div class="image-container">
					<GalleryImage title={'Name'} description="image">
						<Img src={still} alt={name || ''} />
					</GalleryImage>
				</div>
			{/each}
		</LightboxGallery>
	</section>
	<section class="grid container information">
		<aside class="fixed">
			{#if name}
				<h3 style="color:{color}">{name}</h3>
			{/if}

			<div class="details">
				<span class="detail">
					{#if year}
						{year}
					{/if} -
					{#if subtype || type}
						<span style="text-transform: capitalize;">
							{subtype || type}
						</span>
					{/if}
				</span>

				{#if director}
					<div class="detail">
						<p style="text-transform: uppercase;" class="credits">Directed by</p>
						<p>
							{director}
						</p>
					</div>
				{/if}

				{#if producer}
					<div class="detail">
						<p style="text-transform: uppercase;" class="credits">Produced by</p>
						<p>
							{producer}
						</p>
					</div>
				{/if}

				{#if writer}
					<div class="detail">
						<p style="text-transform: uppercase;" class="credits">Written by</p>
						<p>
							{writer}
						</p>
					</div>
				{/if}

				{#if cinematography}
					<div class="detail">
						<p style="text-transform: uppercase;" class="credits">Cinematography by</p>
						<p>
							{cinematography}
						</p>
					</div>
				{/if}

				{#if length}
					<div class="detail">
						<p style="text-transform: uppercase;" class="credits">Running time</p>
						<p>
							{length}
						</p>
					</div>
				{/if}
			</div>
			<div class="">
				{#if url !== ''}
					<ExternalLink ariaLabel="Watch" href={url}>Watch</ExternalLink>
				{/if}

				<div class="poster">
					<Img src={projectImage} alt={name} />
				</div>
			</div>
		</aside>
		<div class="content">
			<div class="markdown">
				<svelte:component this={data.content} />
			</div>
		</div>
	</section>
</article>

<style>
	.image-container {
		/* width: 40%; */
		margin: auto;
		object-fit: contain;
	}

	:global(.svelte-lightbox-body img) {
		max-height: 75vh !important;
		width: auto !important;
	}

	:global(.svelte-lightbox-header) {
		margin-bottom: 0.5rem;
	}

	:global(.svelte-lightbox-footer) {
		margin-top: 0.5rem;
	}

	article {
		display: flex;
		flex-direction: column;
	}

	.markdown {
		margin: 2rem auto;
		width: 100%;
		overflow-wrap: break-word;
	}

	/* .fixed {
		display: none;
	} */

	.grid {
		margin-bottom: 3rem;
	}

	.poster {
		width: 75%;
		margin-top: 1rem;
	}

	.stills {
		display: flex;
		flex-wrap: wrap;
		opacity: 1;
		transition: all 0.3s ease-in-out;
		order: 2;
	}

	.details {
		display: flex;
		flex-direction: column;
		margin: 1rem auto;
	}

	.details > * {
		margin: 0.5rem 0;
	}

	.detail p {
		font-size: 0.9em;
		margin-bottom: 0;
		line-height: 1.5rem;
	}

	.poster {
		display: none;
	}

	@media (min-width: 50em) {
		.grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 6rem;
		}

		.content {
			grid-column: 2 / 4;
			width: 75%;
			/* margin: auto; */
		}

		.stills {
			flex-wrap: nowrap;
			order: 1;
		}

		.information {
			order: 2;
			margin-top: 3rem;
		}

		.fixed {
			display: inline-block;
			position: sticky;
			top: 7rem;
			align-self: flex-start;
			grid-column: 1 / 2;
		}

		.poster {
			display: block;
		}

		.detail p {
			font-size: 1rem;
		}

		.markdown {
			margin: 0 auto;
		}
	}
</style>
