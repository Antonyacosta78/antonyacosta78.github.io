<script lang="ts">
	import { getScrollContext } from '$lib/core/scroll.context';
	import { onMount, type Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let sticker: HTMLElement | undefined = $state();
	let targetScrollTop = $state(0);

	function captureScroll(ev: Event) {
		targetScrollTop = (ev.target! as HTMLElement).scrollTop;
	}

	const context = getScrollContext();

	$effect(() => {
		const target = context.targetAccessor();

		if (!target) return;

		target.onscroll = captureScroll;
	});

	$effect(() => {
		if (!sticker) return;

		sticker.style.bottom = 'unset';
		sticker.style.top = `${window.innerHeight - sticker.clientHeight + targetScrollTop}px`;
	});

	let { children }: Props = $props();
</script>

<div bind:this={sticker} class="sticky">
	{@render children()}
</div>

<style>
	.sticky {
		position: fixed;
		top: calc(100vh - 100%);
		left: 0;
	}
</style>
