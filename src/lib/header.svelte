<script>
  import * as animateScroll from 'svelte-scrollto';
</script>

<header class="flex md:flex-row flex-col gap-4 md:gap-0 justify-between items-center py-5">
	<h1 class="font-bold text-3xl font-serif">Durham Queer Sports</h1>
	<nav class="w-full md:w-auto flex items-center justify-center md:justify-between gap-7">
		<a on:click={() => animateScroll.scrollTo({ element: '#about' })} href="#about">About</a>
		<a on:click={() => animateScroll.scrollTo({ element: '#leagues' })} href="#leagues">Leagues</a>
		<a href="/waiver">Waiver</a>
		<a
			href="mailto:durhamqueersports@gmail.com"
			target="_blank"
			class="bg-cyan-800 hover:bg-cyan-900 transition-colors duration-100 text-white font-medium tracking-wide px-4 py-2 border-white rounded"
			>Contact Us</a
		>
	</nav>
</header>