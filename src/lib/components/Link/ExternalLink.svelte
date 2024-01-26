<script lang="ts">
	export let rel = 'nofollow noopener noreferrer';
	export let target = '_blank';
	export let href: string;
	export let ariaLabel: string;
</script>

<a aria-label={ariaLabel} {href} {rel} {target}><slot /></a>

<style>
	a {
		border-bottom: 1px solid var(--color-black);
		border-bottom-color: var(--color-black);
		display: inline-block;
		transition: border 0.2s linear;
		color: var(--color-primary);
	}

	a:hover {
		border-bottom-color: var(--color-primary);
	}
</style>
