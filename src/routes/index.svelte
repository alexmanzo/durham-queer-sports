<script>
	import "@fontsource/open-sans/400.css";
	import "@fontsource/open-sans/variable.css";

	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Leagues from '$lib/components/Leagues.svelte';
</script>

<Header />

<main>
	<Hero />
	<About />
	<Leagues />
</main>
