<script lang="ts">
	import type { Snippet } from "svelte";
  import socials from "$lib/core/socials.json";
  
  interface Props {
    children: Snippet;
    to: string;
  }
  
  let { children, to }: Props = $props();
  
  const href: string = $derived(socials[to as keyof (typeof socials)] || "#");
  
</script>

<a {href} class="text-accent-secondary hover:text-accent">
  {@render children()}
</a>
