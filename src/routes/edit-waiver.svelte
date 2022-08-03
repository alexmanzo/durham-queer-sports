<script>
	import Tiptap from '$lib/tiptap.svelte';
	import { supabase } from '$lib/supabaseClient';
	let newVersion = false;
	let season;
	let setToCurrent = false;
	let content;
	let submitted = false;
	import { waiverContent } from '$lib/waiverStore';
	import { onMount } from 'svelte';

	const user = supabase.auth.user();

	waiverContent.subscribe((value) => {
		content = value;
	});

	const createWaiver = async () => {
		console.log('creating waiver');
	};

	onMount(async () => {
		await getWaiver();
	});

	const getWaiver = async () => {
		try {
			let { data, error, status } = await supabase
				.from('waivers')
				.select(`season, content`)
				.eq('current', true)
				.single();

			if (error && status !== 406) throw error;
			if (data) {
				season = data.season;
				waiverContent.set(data.content);
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	const updateWaiver = async () => {
		try {
			const { data, error } = await supabase
				.from('waivers')
				.update({ content })
				.eq('current', true);
			if (error) throw error;
		} catch (error) {
			alert(`Send this to Alex to fix it: ${error.message}`);
		} finally {
			submitted = true;
		}
	};
</script>

{#if user}
	<form on:submit|preventDefault={newVersion ? createWaiver : updateWaiver}>
		<label for="newVersion">
			<input type="checkbox" id="newVersion" bind:checked={newVersion} />
			<span>Check here if you want to create a new version of the waiver.</span>
		</label>
		{#if newVersion}
			<label for="season">What season is this waiver for?</label>
			<input type="text" id="season" name="season" bind:value={season} />
			<label for="setToCurrent">
				<input type="checkbox" id="setToCurrent" bind:checked={setToCurrent} />
				<span>Check here if you want to this to be the new default version of the waiver.</span>
			</label>
		{/if}
		<button
			type="submit"
			class="block w-1/2 mt-3 bg-cyan-800 disabled:opacity-50 disabled:hover:bg-cyan-800 hover:bg-cyan-900 transition-colors duration-100 text-white font-medium tracking-wide px-4 py-2 border-white rounded"
			>Save Changes</button
		>
	</form>
	<Tiptap />
{:else}
	<p>Unauthorized</p>
{/if}
