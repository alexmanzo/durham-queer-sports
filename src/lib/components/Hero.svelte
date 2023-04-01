<script lang="ts">
	import { onMount } from 'svelte';

	let LottiePlayer: any;

	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
	});
</script>

<section
	class="flex flex-col items-center justify-between gap-7 lg:flex-row-reverse lg:my-24 md:my-20 my-10"
>
	<h1 class="sr-only">Durham Queer Sports</h1>
	<div class="flex-1 leading-normal text-3xl">
		<p class="text-center lg:text-left">
			At Durham Queer Sports, our mission is to create a <strong
				>free, empowering, social, and athletic</strong
			>
			space for the Triangle's Queer community.
		</p>
	</div>
	<div class="flex-1">
		{#if LottiePlayer}
			<div class="mt-8 md:mt-0 max-w-full md:max-w-lg relative -z-10">
				<LottiePlayer
					src="https://assets3.lottiefiles.com/private_files/lf30_fmcseocu.json"
					mode="bounce"
					autoplay
					loop
					renderer="svg"
					background="transparent"
				/>
			</div>
		{/if}
	</div>
</section>
