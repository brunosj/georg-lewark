<script lang="ts">
	export let data;

	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';
	import SEO from '$lib/components/SEO/index.svelte';

	// SEO
	let title = 'imprint + privacy policy';
	let metadescription = '';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Imprint',
			slug: 'imprint'
		}
	];
	const seoProps = {
		breadcrumbs,
		title,
		metadescription,
		slug: 'contact',
		datePublished: '2023-12-05T14:19:33.000+0100',
		lastUpdated: '2021-12-05T14:19:33.000+0100'
	};

	// Logic
	let element;
	let intersecting = false;
</script>

<SEO {...seoProps} />
<section bind:this={element}>
	<div class="container">
		<IntersectionObserver {element} bind:intersecting once threshold={0.3}>
			{#if intersecting}
				<div class="content">
					<div class="description">
						<h2 transition:fade={{ duration: 500, delay: 0, easing: cubicInOut }}>
							imprint + privacy policy
						</h2>
					</div>
					<div
						class="markdown list"
						transition:fade={{ duration: 500, delay: 500, easing: cubicInOut }}>
						<svelte:component this={data.content} />
					</div>
				</div>
			{/if}
		</IntersectionObserver>
	</div>
</section>

<style>
	section {
		background-color: var(--color-black);
		width: 100%;
		color: white;
		position: relative;
		margin-top: 5rem;
		margin-bottom: 2rem;
		margin-left: auto;
		margin-right: auto;
	}

	h2 {
		color: var(--color-primary);
	}

	.markdown {
		margin: auto;
	}

	.description {
		margin-bottom: 1rem;
	}

	@media (min-width: 55em) {
		section {
			margin-top: 7rem;
			width: 75%;
		}

		.description {
			margin-bottom: 4rem;
		}
	}
</style>
