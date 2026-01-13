<script lang="ts">
	import { onMount } from "svelte";
	import type CommandProps from "./command-props.interface";

  let { onfinish }: CommandProps = $props();
  
  onMount(() => { onfinish() })
  
</script>

<pre>
 ______________
&lt; Keep Rollin' &gt;
 --------------
         \
          \
               ,.-----__
            ,:::://///,:::-.
           /:''/////// ``:::`;/|/
          /'   ||||||     :://'`\
        .' ,   ||||||     `/(  e \
  -===~__-'\__X_`````\_____/~`-._ `.
              ~~        ~~       `~-'
</pre>
