<script lang="ts">
	import type { Options } from 'typeit';
	import typewriter from '$lib/attachments/typewriter';
	import { getCommandContext } from '$lib/core/command.context';
	import type CommandProps from './command-props.interface';

	let { onfinish }: CommandProps = $props();

	const context = getCommandContext();
	const availableCommands = context.commandsMap.keys().toArray().join(', ');

	const typewriterOptions: Options = {
		strings: ['Available Commands:', availableCommands],
		afterComplete:() => onfinish(),
		nextStringDelay: 0
	};
</script>

<p {@attach typewriter(typewriterOptions)}></p>
