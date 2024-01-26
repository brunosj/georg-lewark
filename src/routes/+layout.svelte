<script lang="ts">
	import '@fontsource-variable/sora';
	import '@fontsource-variable/rubik';
	import '@fontsource/ibm-plex-mono';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/source-sans-3';
	import '@fontsource-variable/work-sans';
	import '@fontsource-variable/fredoka';
	import '../styles/reset.css';
	import '../styles/one-dark-theme.css';
	import '../styles/globals.css';

	import Header from '$components/Header/Header.svelte';
</script>

<main class="content">
	<Header />
	<slot />
</main>

<style>
	.content {
		width: 100%;
		order: -9999;
		z-index: 10;
		position: relative;
	}

	:global(body) {
		min-height: 75vh;
	}

	:global(article) {
		margin-top: 5rem;
		margin-bottom: 2.5rem;
	}

	:global(.container) {
		width: 90%;
		margin: 0 auto;
	}
</style>
