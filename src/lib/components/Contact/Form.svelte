<script lang="ts">
	import { enhance } from '$app/forms';
	import { elasticOut, cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	interface SpinParams {
		delay: number;
		duration: number;
	}

	interface SvelteNode extends Element {}

	let action_result: any;
	let success = false;
	let message_type = 'error';

	interface FormData {
		email?: string;
		missing?: boolean;
	}

	let form: FormData | null = null;

	const handle_result = (result: any) => {
		if (result.data.success === true) {
			success = true;
		} else if (result.data.success === false) {
			action_result = 'failure';
			message_type = 'error';
		}
	};

	export const spin = (node: SvelteNode, { delay, duration }: SpinParams) => {
		return {
			delay,
			duration,
			css: (t: any) => {
				const eased = elasticOut(t);
				return `
          transform: scale(${eased}) rotate(${eased * 360}deg);
          `;
			}
		};
	};
</script>

<section>
	<div class="container">
		<form
			method="POST"
			action="/about"
			use:enhance={() => {
				return ({ update, result }) => {
					handle_result(result);
					update({ reset: false });
				};
			}}>
			<p class="get-touch">Get in touch!</p>
			<div class="field">
				<label for="name" class="font-semibold"> Name </label>
				<input type="text" name="name" class="input form" />
			</div>
			<div class="field">
				<label for="email" class="font-semibold"> Email</label>
				<input type="email" name="email" class="input form" value={form?.email ?? ''} required />
			</div>

			<div class="field">
				<label for="message" class="font-semibold"> Message</label>
				<div>
					<textarea name="message" class="input message" />
				</div>
			</div>
			<div>
				{#if form?.missing}<p class="error-message">The email field is required</p>{/if}

				{#if success}
					<p class="success-message">Thanks! Your email has been sent</p>
				{:else if action_result === 'failure'}
					<p class="error-message">There was an error. Please send a message per email.</p>
				{:else}
					<button type="submit">
						<span> Submit</span>
					</button>
				{/if}
			</div>

			<div class="absolute hidden">
				<input type="text" name="_gotcha" />
			</div>
		</form>
	</div>
</section>

<style>
	section {
		margin: auto;
		width: 100%;
		border-radius: 0px;
		background-color: var(--color-gray);
	}

	button {
		cursor: pointer;
		background-color: transparent;
		border-bottom: 1px solid var(--color-black);
		border-bottom-color: var(--color-black);
		display: inline-block;
		transition: border 0.2s linear;
		margin: 0;
		padding: 0;
	}

	button span {
		font-size: 1.1rem;
		color: var(--color-primary);
	}

	button:hover {
		border-bottom-color: var(--color-primary);
	}

	button span {
		border-bottom: 1px solid var(--color-black);
		border-bottom-color: var(--color-black);
		display: inline-block;
		transition: border 0.2s linear;
		font-size: 1rem;
		font-weight: 700;
	}

	button:hover span {
		border-bottom-color: #d7d2d2;
	}

	label {
		color: var(--color-white);
		font-size: 0.9rem;
	}

	form {
		width: 90%;
		margin: auto;
	}

	form > * + * {
		margin-top: 1.5rem;
	}

	.get-touch {
		font-weight: 700;
		margin-bottom: 2rem;
		font-size: 1.1rem;
	}

	.field > * + * {
		margin-top: 0.75rem;
	}

	.container {
		border-radius: 0px;
		padding: 2rem 0rem;
		margin: auto;
	}

	.input {
		box-sizing: border-box;
		color: var(--color-white);
		/* font-size: 1rem; */
		width: 100%;
		border: transparent;
		border-radius: 0px;
		background-color: var(--color-black);
		padding: 0.5rem 1rem;
		transition: border-color 0.3s ease-in-out;
		outline: none;
	}

	.message {
		padding-bottom: 7rem;
		font-family: 'Rubik Variable', sans-serif;
	}

	.error-message {
		color: #ff0000;
	}

	.success-message {
		color: var(--color-primary);
	}

	.hidden {
		display: none !important;
		height: 0;
		width: 0;
	}

	.absolute {
		position: absolute;
	}

	@media (min-width: 50em) {
		button span {
			font-size: 1.2rem;
		}

		label {
			font-size: 1rem;
		}

		.get-touch {
			font-size: 1.2rem;
		}

		.container {
			padding: 3rem 0rem;
		}
	}
</style>
