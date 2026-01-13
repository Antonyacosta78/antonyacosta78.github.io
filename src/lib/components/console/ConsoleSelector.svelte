<script lang="ts">
	import typewriter from '$lib/attachments/typewriter';
	import { getCommandContext } from '$lib/core/command.context';
	import type { ConsoleProps } from './console.props';

	let { enabled, oncommand }: ConsoleProps = $props();

	const context = getCommandContext();
	const commandList = context.commandsMap.keys().toArray();

	function paginate<T>(cmds: T[]): T[][] {
		const chunks: T[][] = [];
		const PAGE_SIZE = 4;
		for (let i = 0; i < cmds.length; i += PAGE_SIZE) {
			chunks.push(cmds.slice(i, i + PAGE_SIZE));
		}

		return chunks;
	}
  
  function changePage(howMuch: number) {
    const newPageNumber = pageNumber + howMuch;
    
    if(newPageNumber < 0) { 
      // go to last page
      pageNumber = pages.length - 1;
    } else if(newPageNumber >= pages.length) {
      // reset to 0
      pageNumber = 0;
    } else {
      pageNumber = newPageNumber;
    }
  }

	let pageNumber = $state(0);
	let pages = $derived.by(() => paginate(commandList));
  let page = $derived(pages[pageNumber]);
</script>

<div class="wrapper absolute bottom-0 left-0 flex h-3/20 w-full flex-col justify-end">
	<p class="text-md mb-1 text-center font-normal">Tap to run command</p>

	<div class="wrapper border-accent flex w-full flex-col justify-around border-2">
		<div class="commands flex justify-around py-1">
			{#each page as cmd}
				{@render command(cmd)}
			{/each}
		</div>
		<div class="buttons flex w-full">
			{@render button('<', () => changePage(-1))}
			{@render button('>', () => changePage(+1))}
		</div>
	</div>
</div>

{#snippet command(name: string)}
	<button onclick={() => oncommand(name)} disabled={!enabled} class="disabled:text-muted">
    <span {@attach typewriter({ strings: name })}>{name}</span>
  </button>
{/snippet}

{#snippet button(text: string, onclick: (ev: Event) => void)}
	<button
		type="button"
		aria-label="scroll-button"
		class="scroll-button text-accent w-1/2 text-4xl font-black"
		{onclick}
	>
		{text}
	</button>
{/snippet}

<style>
	.buttons > button {
		border-top: 2px solid var(--color-accent);
	}
  
</style>
