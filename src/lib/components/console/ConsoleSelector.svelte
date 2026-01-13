<script lang="ts">
	import { getCommandContext } from '$lib/core/command.context';
	import type { ConsoleProps } from './console.props';
  
  let props: ConsoleProps = $props();
  
  const context = getCommandContext();
  
</script>

<div class="wrapper w-full absolute bottom-0 left-0 h-3/20 flex flex-col justify-end">
  <p class="text-center text-md font-normal mb-1">Tap to run command</p>
  
  <div class="wrapper w-full border-2 border-accent flex flex-col justify-around">
    <div class="commands flex justify-around py-1">
      {#each context.commandsMap.keys() as cmd}
        {@render command(cmd)}
      {/each}
      
    </div>
    <div class="buttons flex w-full">
      {@render button("<")}
      {@render button(">")}
    </div>
  </div>
</div>

{#snippet command(name: string)}
  <button>{name}</button>
{/snippet}

{#snippet button(text: string)}
    <button type="button" aria-label="scroll-button" class="w-1/2 scroll-button text-4xl text-accent font-black">{text}</button>
{/snippet}


<style>
  
  .buttons > button {
    border-top: 2px solid var(--color-accent);
  }
</style>