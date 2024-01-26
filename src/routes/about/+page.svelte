<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import ProfilePicture from '$lib/assets/images/Profile_Picture_Georg_Lewark.jpg';

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
		<div class="picture">
			<img src={ProfilePicture} alt="Georg Lewark" class="object-cover h-full w-full" />
		</div>
		<div>
			<p>Georg Lewark is a filmmaker</p>
		</div>
	</section>
</article>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.picture {
		width: 70%;
	}
</style>
