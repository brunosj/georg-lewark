<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, slide, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { menu } from '$lib/data/menu';
	import { page } from '$app/stores';

	let animate = false;
	let currentPage = '';

	onMount(() => {
		animate = true;
	});

	$: {
		currentPage = $page.url.pathname;
	}
</script>

<header>
	{#if animate}
		<nav
			class="container"
			transition:fly={{
				y: -100,
				duration: 500,
				easing: cubicInOut,
				opacity: 1,
				delay: 250
			}}>
			<div class="logo">
				<a href="/" aria-label="Georg Lewark">
					<p>Georg Lewark</p>
				</a>
			</div>
			<ul class="menu">
				{#each menu as { name, slug }}
					<li class:selected={currentPage.includes(slug)}>
						<a href={slug}>
							<span>{name}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		z-index: 50;
		top: 0rem;
		background-color: rgb(var(--color-blackrgb), 0.8);
	}

	nav {
		right: 0;
		display: flex;
		align-items: center;
		margin: 0.6rem auto;
		flex-direction: row;
		justify-content: space-between;
		max-width: 95%;
	}

	li {
		list-style: none;
		border-bottom: 1px solid var(--color-black);
		border-bottom-color: var(--color-black);
		display: inline-block;
		transition: border 0.2s linear;
		opacity: 0.5;
	}

	li:hover {
		border-bottom-color: #d7d2d2;
	}

	li.selected {
		opacity: 1;
	}

	span {
		position: relative;
		line-height: 1;
		font-size: 0.8rem;
		font-family: 'Work Sans Variable', sans-serif;
	}

	.menu {
		display: flex;
		align-items: center;
		flex-direction: row;
		gap: 0.7rem;
	}

	@media (min-width: 55em) {
		span {
			font-size: 1rem;
		}

		.menu {
			gap: 1rem;
		}
	}
</style>
