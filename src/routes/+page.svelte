<script lang="ts">
	import typewriter from "$lib/attachments/typewriter";
	import Loader from "$lib/components/Loader.svelte";
  
</script>

<Loader delay={5000}>
  <div class="font-bold">
    <h1 {@attach typewriter({ startDelay: 100, speed: 50, waitUntilVisible: true })} class="text-5xl">Hello! Antony Here</h1>
  </div>
</Loader>
  

<style>
  
</style>