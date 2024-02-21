<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import Form from '$components/Contact/Form.svelte';
	import ProfilePicture from '$lib/assets/images/Profile_Picture_Georg_Lewark.jpg?as=run&imagetools';
	import ExternalLink from '$components/Link/ExternalLink.svelte';
	import Img from '@zerodevx/svelte-img';

	// SEO
	let title = 'Contact';
	let metadescription = '';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Contact',
			slug: 'contact'
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
<article id="contact">
	<section class="container">
		<div class="info">
			<div class="picture">
				<Img src={ProfilePicture} alt="Georg Lewark" style="border-radius: 0px;" />
			</div>
			<div class="description">
				<h3>Georg Lewark</h3>
				<div>
					<p>Cinematography // Photography</p>
					<p>Based in Berlin</p>
				</div>
				<div class="links">
					<ExternalLink href="mailto:info@georglewark.de" ariaLabel="mail button"
						>mail</ExternalLink>
					<ExternalLink href="https://www.instagram.com/georglewark/" ariaLabel="instagram button"
						>instagram</ExternalLink>
				</div>
			</div>
		</div>
		<div class="contact">
			<Form />
		</div>
	</section>
</article>

<style>
	section {
		display: flex;
		flex-direction: column;
		margin: auto;
		min-height: 75vh;
	}

	.info {
		display: flex;
		align-items: center;
		width: 100%;
		margin: auto;
		gap: 2rem;
	}

	.contact {
		width: 100%;
		margin: auto;
		margin-top: 3rem;
	}

	.picture {
		width: 25%;
		height: 25%;
	}

	.description > * {
		margin: 0.7rem 0;
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

	@media (min-width: 50em) {
		section {
			flex-direction: row;
		}

		.info {
			width: 50%;
		}

		.contact {
			margin: auto;
			width: 50%;
		}

		.links {
			width: 100%;
		}

		.description > * {
			margin: 1rem 0;
		}

		.links {
			font-size: 1rem;
		}
	}
</style>
