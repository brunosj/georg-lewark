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

	$: console.log(currentPage);
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
					<span>Georg Lewark</span>
				</a>
			</div>
			<ul class="menu">
				{#each menu as { name, slug }}
					<li class:selected={currentPage.match(new RegExp(`^${slug}(/|$)`))}>
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
		margin: 1rem auto;
		flex-direction: row;
		justify-content: space-between;
		max-width: 95%;
	}

	.logo span {
		color: var(--color-primary);
		font-weight: 500;
	}

	li {
		list-style: none;
		border-bottom: 1px solid rgb(var(--color-blackrgb), 0.8);
		background-color: rgb(var(--color-blackrgb), 0.8);
		display: inline-block;
		transition: border 0.2s linear;
		opacity: 0.6;
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
		font-size: 0.9rem;
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
			font-size: 1.1rem;
		}

		.menu {
			gap: 1rem;
		}
	}
</style>
