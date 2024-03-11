<script>
	import ogSquareImageSrc from '$lib/assets/images/og_image.jpg';
	import ogImageSrc from '$lib/assets/images/og_image.jpg';
	import featuredImageSrc from '$lib/assets/images/og_image.jpg';
	import { website } from '$lib/data/config';
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';

	const {
		author,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteDescription,
		siteUrl,
		githubPage,
		linkedinProfile,
		telegramUsername
	} = website;

	export let entityMeta = null;
	export let metadescription = '';
	export let slug;
	export let title;
	export let entity = {};

	const defaultAlt =
		'logo of the website, a stylized paranthesis and the beginning of a closing tag (less than sign)';

	export let featuredImage = {
		url: featuredImageSrc,
		alt: defaultAlt,
		width: 672,
		height: 448,
		caption: 'Home page'
	};
	export let ogImage = {
		url: ogImageSrc,
		alt: defaultAlt
	};
	export let ogSquareImage = {
		url: ogSquareImageSrc,
		alt: defaultAlt
	};

	const url = `${siteUrl}/${slug}`;
	const pageTitle = `${title ? `${title} | Georg Lewark` : 'Georg Lewark'}`;
	const openGraphProps = {
		image: ogImage,
		squareImage: ogSquareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url
	};
	const schemaOrgProps = {
		author,
		breadcrumbs: [
			{
				name: 'Home',
				slug: ''
			}
		],
		entity,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		title,
		url,
		githubPage,
		linkedinProfile,
		telegramUsername
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={siteDescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
</svelte:head>
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
