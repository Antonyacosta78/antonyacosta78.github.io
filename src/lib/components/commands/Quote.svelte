<script lang="ts">
	import typewriter from '$lib/attachments/typewriter';
	import quotes from '$lib/core/quotes.json';
	import type { Options } from 'typeit';
	import type CommandProps from './command-props.interface';

	let { onfinish }: CommandProps = $props();

	function getRandomQuote() {
		return quotes[Math.floor(Math.random() * quotes.length)];
	}

	const quote = getRandomQuote();

	const typewriterOptions: Options = {
		strings: [`"${quote.quote}" `, `    — ${quote.author}`],
		afterComplete: () => onfinish(),
		speed: 20
	};
</script>

<p {@attach typewriter(typewriterOptions)}></p>
