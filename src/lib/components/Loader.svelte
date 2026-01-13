<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  
	import delayDisplay from "$lib/attachments/delay-display";
  import spinner from "$lib/attachments/spinner";
	import typewriter from "$lib/attachments/typewriter";
	import { render } from 'svelte/server';

  interface Props {
    children: Snippet,
    delay: number
  }
  
	let { children, delay }: Props  = $props();
  
  let resolveTypingPromise: (value: unknown) => void;
  const typingPromise = new Promise((res) => { resolveTypingPromise = res });
  
  let resolveRenderPromise: (value: unknown) => void;
  const renderChildrenPromise = new Promise((res) => { resolveRenderPromise = res });
  
  const typewriterOptions = { 
    startDelay: 250,
    speed: 100,
    strings: "Initializing",
    afterComplete: () => setTimeout(resolveTypingPromise, 100)
  }
  
  onMount(() => {
    typingPromise
      .then(() => setTimeout(resolveRenderPromise, delay));
  });
 
</script>

{#await renderChildrenPromise}
  <div class="size-full justify-center flex">
  <div class="place-self-center text-center">
    <!-- 
      hacky little thing we have to do if we want the word to not flash at first while javascript 
      catches up to the DOM rendering
      string to be typed is defined in typewriterOptions
    -->
    <!-- svelte-ignore a11y_missing_content -->
    <h1 {@attach typewriter(typewriterOptions)} class="text-5xl md:text-7xl font-bold"></h1>
    <br>
    <br>
    <br>
    <span {@attach delayDisplay(typingPromise, true)} {@attach spinner(500)} class="text-3xl md:text-5xl font-medium"></span>
    <br>
    <br>
    <br>
  </div>
</div>
{:then _} 
  {@render children()}
{/await}
