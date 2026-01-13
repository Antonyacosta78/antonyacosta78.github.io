<script lang="ts">
	import { onMount } from 'svelte';
	import type { ConsoleProps } from './console.props';

  let { oncommand, enabled }: ConsoleProps = $props();

	let consoleInputElement: HTMLDivElement;

	function checkforSubmit(event: KeyboardEvent) {
		if (event.key.toLowerCase() !== 'enter') return;

		event.preventDefault();

		const divElement = event.target as HTMLDivElement;
		oncommand(divElement.textContent.trim().toLowerCase());

		divElement.textContent = '';
	}

	function refocus() {
		consoleInputElement.focus();
	}
	
	$effect(() => {
		if(enabled) refocus();
	});

	onMount(() => {
		refocus();
	});
</script>

<!-- onblur -> refocus, to not allow unfocusing, prevents usability shenanigans if they somehow touch outsude -->
<div
	class="console-input after:font-bold"
	class:hidden={!enabled}
	bind:this={consoleInputElement}
	contenteditable={enabled}
	onkeydown={checkforSubmit}
	onblur={refocus}
	role="search"
></div>

<style>
	.console-input {
		/* position: relative; */
		caret-color: transparent;
		min-width: 2rem;
	}

	.console-input:focus-visible {
		outline: none;
	}

	/* Puts a blinking square after the content as replacement for caret */
	.console-input[contenteditable]::before {
		content: '>';
		/* animation: blink 1s steps(2) infinite; */
		font-weight: 800;
		margin-right: 5px;
	}

	/* Puts a blinking square after the content as replacement for caret */
	.console-input[contenteditable='true']::after {
		content: '_';
		animation: blink 1s steps(2) infinite;
		font-weight: 800;
		margin-left: 1px;
	}

	@keyframes blink {
		0% {
			opacity: 0;
		}
	}
</style>
