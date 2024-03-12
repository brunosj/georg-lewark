<script lang="ts">
	import { page } from '$app/stores';

	let currentPage = '';

	$: {
		currentPage = $page.url.pathname;
	}
</script>

<footer class="container">
	<div class="link">
		<a href="/imprint" class:selected={currentPage.includes('imprint')}>
			<span>imprint + privacy policy</span>
		</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
	}

	.link {
		margin-left: auto;
		margin-bottom: 3rem;
	}

	a {
		border-bottom: 1px solid rgb(var(--color-blackrgb), 0.8);
		background-color: rgb(var(--color-blackrgb), 0.8);
		/* display: inline-block; */
		transition: border 0.2s linear;
		opacity: 0.6;
	}

	a.selected {
		opacity: 1;
	}

	a:hover {
		border-bottom-color: #d7d2d2;
	}

	span {
		position: relative;
		line-height: 1;
		font-size: 0.9rem;
		font-family: 'Trade Gothic', sans-serif;
	}

	@media (min-width: 55em) {
		span {
			font-size: 1.1rem;
		}
	}
</style>
