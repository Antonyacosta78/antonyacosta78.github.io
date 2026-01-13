<script lang="ts">
	import { setCommandContext } from '$lib/core/command.context';
	import commandsMap, { type CommandComponent } from '$lib/core/commands';
	import { getScrollContext } from '$lib/core/scroll.context';
	import Greeting from './commands/Greeting.svelte';
	import NotFound from './commands/NotFound.svelte';
	import ConsoleInput from './console/ConsoleInput.svelte';
	import ConsoleSelector from './console/ConsoleSelector.svelte';

	let isMobile = $state(false);

	let CurrentCommandComponent = $state<CommandComponent>();
	let inputEnabled = $state(false);
  
  const scrollContext = getScrollContext();
  
	function toggleInput(enable: boolean) {
		inputEnabled = enable;
	}

	function handleCommand(command: string) {
		CurrentCommandComponent = undefined;
		toggleInput(false);
    const scrollContextTarget = scrollContext.targetAccessor();
    

		// force update to happen on next tick, retriggers commands if sent the same command twice
		setTimeout(() => {
      if(scrollContextTarget) {
        scrollContextTarget.scrollTop = 0;
      }
      
			if (commandsMap.has(command)) {
				CurrentCommandComponent = commandsMap.get(command);
			} else {
				CurrentCommandComponent = NotFound;
			}
		});
	}

	function initializeCommander() {
		CurrentCommandComponent = Greeting;
		setCommandContext({ commandsMap });
	}

	$effect(() => {
	  // we assume that if with is 1024 or more, we are in a desktop device
		isMobile = window.innerWidth < 1024;
	});

	initializeCommander();
</script>

<div class="pb-25 sm:pb-0 relative h-full w-full text-2xl font-bold sm:w-3/5">
	{#if CurrentCommandComponent}
		<CurrentCommandComponent onfinish={() => toggleInput(true)} />
	{/if}

	{#if isMobile}
		<ConsoleSelector oncommand={handleCommand} enabled={inputEnabled} />
	{:else}
		<ConsoleInput oncommand={handleCommand} enabled={inputEnabled} />
	{/if}
</div>
