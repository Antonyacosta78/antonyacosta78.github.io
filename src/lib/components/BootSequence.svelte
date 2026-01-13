<script lang="ts">
	import spinner from "$lib/attachments/spinner";
	import { onMount } from "svelte";
  import TypeIt from "typeit";
  
  interface Props {
    onfinish: () => unknown
  }
  
  let { onfinish }: Props = $props();
  
  let target: HTMLElement;
  let spinnerOpacity = $state("0%");
  
  function toggleSpinner(show: boolean) {
    spinnerOpacity = show ? "1" : "0";
  }
  
  function performBootSequence(typewriter: TypeIt) {

    typewriter
      .type("boot sequence")
      .pause(200)
      .type(".")
      .pause(200)
      .type(".")
      .pause(200)
      .type(".")
      .pause(200)
      .break()
      .break()
      .break()
      .flush();
      
    typewriter
      .type("loading user profile: [Antony Acosta]...")
      .break()
      .break()
      .break()
      .flush(() => {
        toggleSpinner(true);
        typewriter.destroy();
        
        setTimeout(() => {
          toggleSpinner(false);
          typewriter
            .break()
            .type("data successfully loaded.")
            .flush(() => {
              typewriter.destroy()
              onfinish()
            });
        }, 5000);
      });
      
      
    
  }
  
  onMount(() => {
    const typewriter = new TypeIt(target, {
      cursorChar: "_",
      startDelay: 250,
      speed: 75,
    })
    
    performBootSequence(typewriter);
    
  })
  

</script>
<div class="text-2xl font-bold uppercase">
  <span bind:this={target}></span>
  <span style:opacity={spinnerOpacity} {@attach spinner(300)} ></span>
</div>
