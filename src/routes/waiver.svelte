<script>
import Header from '$lib/header.svelte';

	import { supabase } from '$lib/supabaseClient';
	let loading = true;
	let season;
	let content;

	const getWaiver = async () => {
		try {
			loading = true;

			let { data, error, status } = await supabase
				.from('waivers')
				.select(`season, content`)
				.eq('current', true)
				.single();

			if (error && status !== 406) throw error;

			if (data) {
				season = data.season;
				content = data.content;
        console.log(data.content.sections)
			}
		} catch (error) {
			console.error(error.message);
		} finally {
			loading = false;
		}
	};
</script>

<Header />
<div use:getWaiver class="prose mx-auto lg:py-10 py-6">
	<h1 class="text-center text-xl lg:text-4xl">Durham Queer Sports<br>Participant Assumption of Risk and Release of Liability</h1>
	<p class="text-center">{season} Season</p>
	{#if content}
		{#each content.sections as section}
			{#if section.heading}
				<h2>{section.heading}</h2>
			{/if}
			{#if section.description}
				<p>{section.description}</p>
			{/if}
			<ol>
				{#each section.bullets as bullet}
					<li>{@html bullet}</li>
				{/each}
			</ol>
		{/each}
	{/if}
</div>
