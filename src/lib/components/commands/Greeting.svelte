<script lang="ts">
	import typewriter from "$lib/attachments/typewriter";
	import Social from "../Social.svelte";
	import type CommandProps from "./command-props.interface";
  
  let { onfinish }: CommandProps = $props(); 
  
</script>

<div>
  <p {@attach typewriter({ afterComplete: onfinish })}>
    Welcome to my Portfolio!
    <br>
    <br>
    My name is Antony Acosta, I'm a Fullstack Developer skilled in many technologies but mainly in Node.js and Front End frameworks
    <br>
    <br>
    This portfolio might be updated later, but feel free to contact me on <Social to="linkedin">LinkedIn</Social> or by <Social to="mail">Mail</Social>
    if you want to know more!
    <br>
    <br>
    <br>
    This portfolio takes inspiration on video game terminals, use the command "help" to see the available commands
    <br>
    <br>
    <br>
  </p>
</div>
