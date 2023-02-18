<script>
	import Header from '$lib/components/Header.svelte';
	import '@fontsource/open-sans/400.css';
	import '../app.css';

	import { createClient, setContextClient } from '@urql/svelte';

	const client = createClient({
		url: import.meta.env.VITE_HYGRAPH_READ_ONLY_ENDPOINT
	});

	setContextClient(client);
</script>

<svelte:head>
	<title>Durham Queer Sports</title>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<Header />
<main class="container mx-auto px-3">
	<slot />
</main>
