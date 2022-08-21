<script>
	import * as animateScroll from 'svelte-scrollto';
</script>

<header class="flex gap-4 md:gap-0 items-center justify-between py-5">
	<div class="flex items-center">
		<a href="/"><img src="/logo.png" alt="Durham Queer Sports logo" class="max-h-28 md:max-h-32" /></a>
		<h1 class="sr-only font-medium tracking-wide text-3xl font-serif">Durham Queer Sports</h1>
	</div>

	<nav class="w-full md:w-auto flex items-center justify-end md:justify-between gap-7 max-h-14">
		<a on:click={() => animateScroll.scrollTo({ element: '#about' })} href="/#about" class="hidden md:block">About</a>
		<a on:click={() => animateScroll.scrollTo({ element: '#leagues' })} href="/#leagues" class="hidden md:block">Leagues</a>
		<a href="/waiver">Waiver</a>
		<a
			href="mailto:durhamqueersports@gmail.com"
			target="_blank"
			class="bg-indigo hover:bg-indigo-7 focus-visible:outline-indigo-11 transition-colors duration-100 text-white font-medium tracking-wide px-4 py-2 border-white rounded"
			>Contact Us</a
		>
	</nav>
</header>
