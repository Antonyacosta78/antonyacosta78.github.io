<script lang="ts">
	import BootSequence from "$lib/components/BootSequence.svelte";
	import Commander from "$lib/components/Commander.svelte";
	import Loader from "$lib/components/Loader.svelte";
  
  let shouldRenderBoot = $state(true)
  
  
</script>

<Loader delay={5000}>
  {#if shouldRenderBoot}
  <BootSequence onfinish={() => setTimeout(() => {
    shouldRenderBoot = false;
  }, 1500)}/>
  {:else}
  <Commander />
  {/if}
</Loader>

