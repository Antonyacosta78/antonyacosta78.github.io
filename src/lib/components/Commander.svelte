<script lang="ts">
	
  import { type Component } from "svelte";
	import { setCommandContext } from "$lib/core/command.context";
  import commandsMap, { type CommandComponent } from "$lib/core/commands";
	import Greeting from "./commands/Greeting.svelte";
	import NotFound from "./commands/NotFound.svelte";
	import ConsoleInput from "./console/ConsoleInput.svelte";
	import ConsoleSelector from "./console/ConsoleSelector.svelte";
 
  
    
  // we assume that if with is 1366 or more, we are in desktop
  let isMobile = $state(false);

  let CurrentCommandComponent = $state<CommandComponent>();
  let inputEnabled = $state(false);

  function toggleInput(enable: boolean) {
    inputEnabled = enable;
  }
    
  function handleCommand(command: string) {
    CurrentCommandComponent = undefined;
    toggleInput(false);

    // force update to happen on next tick, retriggers commands if sent the same command twice
    setTimeout(() => { 
      if (commandsMap.has(command)) {
        CurrentCommandComponent = commandsMap.get(command);
      } else {
        CurrentCommandComponent = NotFound
      }
    })
  }
  
  function initializeCommander() {
    CurrentCommandComponent = Greeting;
    setCommandContext({ commandsMap });
  }
  
  $effect(() => {
    isMobile = window.innerWidth < 1024;
  });
  
  initializeCommander();
</script>

<div class="text-2xl font-bold w-full sm:w-3/5">
  {#if CurrentCommandComponent} 
	  <CurrentCommandComponent onfinish={() => toggleInput(true)} />
  {/if}
  
  {#if isMobile} 
  <ConsoleSelector oncommand={handleCommand} enabled={inputEnabled} />
  {:else}
	<ConsoleInput oncommand={handleCommand} enabled={inputEnabled} />
  {/if}
</div>
