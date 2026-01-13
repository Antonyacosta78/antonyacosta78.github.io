<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="bezel">
	<div class="crt bg-primary text-secondary dark:bg-secondary dark:text-primary h-screen w-screen overflow-auto">
		<div class="p-6 size-full">
			{@render children()}
		</div>
		<div class="scanline"></div>
	</div>
</div>

<style>
	@keyframes scanline {
		0% {
			bottom: 100%;
		}
		80% {
			bottom: 100%;
		}
		100% {
			bottom: 0%;
		}
	}

	.scanline {
		width: 100%;
		height: 10px;
		z-index: 8;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(255, 255, 255, 0.2) 10%,
			rgba(0, 0, 0, 0.1) 100%
		);
		opacity: 0.1;
		position: absolute;
		bottom: 100%;
		animation: scanline 20s linear infinite;
	}

	.crt {
		filter: blur(0.5px);
	}

	.crt:before {
		content: ' ';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: linear-gradient(to bottom, rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
		background-size: 100% 4px;
		z-index: 2;
		pointer-events: none;
	}
</style>
