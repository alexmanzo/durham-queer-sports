<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import { fade, fly } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import { focusTrap } from 'svelte-focus-trap'

	let open: boolean;
</script>

<svelte:head>
	{#if open}
		<style>
			body {
				overflow-y: hidden;
			}
		</style>
	{/if}
</svelte:head>

<header class="py-5 relative" use:focusTrap>
	<div class="flex items-center justify-between w-full relative z-20 container mx-auto px-3">
		<a href="/" class="focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo outline-offset-4 rounded-full">
			<img src="/logo.png" alt="Durham Queer Sports logo" class="max-h-28 md:max-h-32" />
		</a>
		<Hamburger
			bind:open
			type="squeeze"
			--color="#1f2c5c"
			--active-color="#1c274f"
			--border-radius="2px"
		/>
	</div>

	{#if open}
		<div
			class="w-screen h-screen fixed top-0 left-0 bg-indigo bg-opacity-75 "
			transition:fade={{ duration: 175 }}
		>
			<div
				transition:fly={{ x: 200, duration: 250, easing: sineOut }}
				class="bg-indigo-12 flex flex-col items-center gap-7 fixed top-0 right-0 pt-24 min-h-screen w-screen z-10 md:w-1/3 shadow-2xl"
			>
				<nav class="flex flex-col items-center gap-9 py-14 text-2xl">
					<a href="/about" class="hover:underline focus-visible:outline focus-visible:outline-2 outline-offset-4 rounded-sm focus-visible:outline-indigo" on:click={() => (open = !open)}>About DQS</a>
					<a href="/faq" class="hover:underline focus-visible:outline focus-visible:outline-2 outline-offset-4 rounded-sm focus-visible:outline-indigo" on:click={() => (open = !open)}>FAQ</a>
					<a href="/schedule" class="hover:underline focus-visible:outline focus-visible:outline-2 outline-offset-4 rounded-sm focus-visible:outline-indigo" on:click={() => (open = !open)}>Schedule</a>
					<a href="/waiver" class="hover:underline focus-visible:outline focus-visible:outline-2 outline-offset-4 rounded-sm focus-visible:outline-indigo" on:click={() => (open = !open)}>Waiver</a>
					<a
						href="mailto:durhamqueersports@gmail.com"
						target="_blank"
						class="bg-indigo hover:bg-indigo-7 focus-visible:outline focus-visible:outline-indigo focus-visible:outline-2 outline-offset-4 transition-colors duration-100 text-white font-medium tracking-wide px-4 py-2 border-white rounded"
						on:click={() => (open = !open)}>Contact Us</a
					>
				</nav>
			</div>
		</div>
	{/if}
</header>
