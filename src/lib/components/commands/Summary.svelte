<script lang="ts">
	import typewriter from "$lib/attachments/typewriter";
	import type CommandProps from "./command-props.interface";
  
  let { onfinish }: CommandProps = $props();
  
  let parts = $state({
    name: false,
    role: false,
    experience: false,
    profile: false,
    tech: false,
  });
  
  $effect(() => {
    const { name, role, experience, profile, tech } = parts;
    if(name && role && experience && profile && tech) {
      onfinish();
    }
  });
  
</script>

<div>
  <p class="w-1/2 sm:w-full">
    <span {@attach typewriter({ afterComplete: () => parts.name = true })}>Antony Acosta</span>
    <br>
    <br>
    <span {@attach typewriter({ afterComplete: () => parts.role = true })}>Role: Fullstack Developer</span>
    <br>
    <br>
    <span {@attach typewriter({ afterComplete: () => parts.experience = true })}>Experience: ≈ 7 years (in the industry since 2019)</span>
    <br>
    <br>
    <span {@attach typewriter({ afterComplete: () => parts.profile = true })}>
      Profile: Dynamic Web Developer with seven years of experience. Adept at
        collaborating in close knit multidisciplinary teams. Proficient using technical expertise to solve complex challenges and drive
        project success.
    </span>
    <br>
    <br>
    <span {@attach typewriter({ afterComplete: () => parts.tech = true })}>
      Technology Stack:
      <br>
        - Front End: [ React, Angular, Vue, Svelte ]
      <br>
        - Back End: [ Node.js, PHP ]
      <br>
        - Mobile: [ Ionic, Capacitor, React Native ]
      <br>
    </span>
    <br>
  </p>
</div>