<script lang="ts">
	export let data;

	import SEO from '$lib/components/SEO/index.svelte';
	import Form from '$components/Contact/Form.svelte';
	import ProfilePicture from '$lib/assets/images/Profile_Picture_Georg_Lewark.jpg?as=run&imagetools';
	import ExternalLink from '$components/Link/ExternalLink.svelte';
	import Img from '@zerodevx/svelte-img';

	// SEO
	let title = 'About';
	let metadescription = '';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'About',
			slug: 'about'
		}
	];
	const seoProps = {
		breadcrumbs,
		title,
		metadescription,
		slug: ''
	};
</script>

<SEO {...seoProps} />
<article id="about">
	<section class="container">
		<div class="left-column">
			<div class="info">
				<div class="picture">
					<Img
						src={ProfilePicture}
						alt="Georg Lewark"
						style="border-radius: 0px; object-fit:cover;" />
				</div>
				<div class="description">
					<h3>Georg Lewark</h3>
					<p>Cinematography // Photography</p>
					<div class="links">
						<ExternalLink href="mailto:info@georglewark.de" ariaLabel="mail button"
							>mail</ExternalLink>
						<ExternalLink href="https://www.instagram.com/g.lewark/" ariaLabel="instagram button"
							>instagram</ExternalLink>
					</div>
				</div>
			</div>
			<div class="markdown bio">
				<svelte:component this={data.content} />
			</div>
		</div>
		<div class="contact">
			<Form />
		</div>
	</section>
</article>

<style>
	section {
		margin: auto;
		min-height: 75vh;
		gap: 2rem;
	}

	.left-column {
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		width: 100%;
		margin: auto;
	}

	.info {
		display: flex;
		width: 100%;
		gap: 2rem;
	}

	.contact {
		width: 100%;
		margin: auto;
		margin-top: 1rem;
	}

	.picture {
		width: 25%;
		height: 25%;
	}

	.description {
		margin: auto 0;
	}

	.description > * {
		margin: 0.2rem 0;
	}

	.links {
		width: 50%;
		display: inline-flex;
		flex-direction: row;
		gap: 2rem;
		margin: 0;
		font-size: 0.9rem;
		/* justify-content: space-between; */
	}

	.bio {
		margin-top: 2rem;
	}

	@media (min-width: 50em) {
		section {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 4rem;
		}

		.info {
			width: 100%;
		}

		.contact {
			margin: auto;
			width: 100%;
		}

		.links {
			width: 100%;
		}

		.description > * {
			margin: 0.5rem 0;
		}

		.links {
			font-size: 1rem;
		}
	}
</style>
