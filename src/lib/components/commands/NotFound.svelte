<script lang="ts">
	import typewriter from '$lib/attachments/typewriter';
	import type CommandProps from './command-props.interface';

	let { onfinish }: CommandProps = $props();
</script>

<p {@attach typewriter({ startDelay: 0, afterComplete: onfinish })}>
	Command not found. Use "help" to see available commands
</p>
