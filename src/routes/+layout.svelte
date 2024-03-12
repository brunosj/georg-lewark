<script lang="ts">
	import '../styles/reset.css';
	import '../styles/globals.css';

	import Header from '$components/Header/Header.svelte';
	import Footer from '$components/Footer/Footer.svelte';
</script>

<main class="content">
	<Header />
	<slot />
	<Footer />
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
		margin-bottom: 3rem;
	}

	:global(.container) {
		width: 90%;
		margin: 0 auto;
	}
</style>
