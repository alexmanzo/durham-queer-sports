<script>
	import { fade, fly } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import { supabase } from '$lib/supabase/supabaseClient';
	import StarterKit from '@tiptap/starter-kit';
	import Link from '@tiptap/extension-link';
	import { generateHTML } from '@tiptap/html';
import Header from '$lib/components/Header.svelte';

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
				content = generateHTML(data.content, [StarterKit, Link]);
			}
		} catch (error) {
			console.error(error.message);
		} finally {
			loading = false;
		}
	};

	let firstName;
	let lastName;
	let email;
	let agree;
	let honeypotField;
	let submitted = false;

	const signWaiver = async () => {
		if (agree && !honeypotField) {
			try {
				const { data, error } = await supabase.from('waiver_signatures').insert(
					[
						{
							first_name: firstName,
							last_name: lastName,
							email
						}
					],
					{ returning: 'minimal' }
				);

				if (error) throw error;
			} catch (error) {
				alert(`Send this to Alex to fix it: ${error.message}`);
			} finally {
				submitted = true;
			}
		} else {
			alert('You must agree to the terms of the waiver.');
		}
	};
</script>

<Header />
<div class="prose mx-auto lg:py-10 py-6">
	<section use:getWaiver>
		{#if !loading}
			<div in:fly={{ y: 200, duration: 250, easing: sineOut }}>
				<div in:fade={{ duration: 200 }}>
					<h1 class="font-serif font-normal text-center text-xl lg:text-4xl">
						Durham Queer Sports<br />Participant Assumption of Risk and Release of Liability
					</h1>
					{#if content}
						<p class="text-center" in:fade={{ duration: 300 }}>{season} Season</p>
						{@html content}
					{/if}
				</div>
			</div>
		{/if}
	</section>
	<section />
	{#if !loading}
		<section>
			{#if !submitted}
				<form on:submit|preventDefault={signWaiver}>
					<div class="flex justify-between gap-3 mb-2">
						<div class="flex-1 w-full">
							<label class="block" for="firstName">First Name</label>
							<input
								class="block w-full"
								type="text"
								name="firstName"
								id="firstName"
								bind:value={firstName}
								required
							/>
						</div>
						<div class="flex-1 w-full">
							<label class="block" for="lastName">Last Name</label>
							<input
								class="block w-full"
								type="text"
								name="lastName"
								id="lastName"
								bind:value={lastName}
								required
							/>
						</div>
					</div>
					<label class="block w-full" for="email">Email</label>
					<input
						class="block w-full"
						type="email"
						name="email"
						id="userEmail"
						bind:value={email}
						required
					/>
					<label for="agree" class="mt-3 flex items-center gap-3">
						<input type="checkbox" name="agree" id="agree" bind:checked={agree} required />
						I agree to the terms of the waiver.
					</label>
					<label for="petName" class="hidden">Pet Name</label>
					<input type="hidden" name="petName" id="petName" bind:value={honeypotField} />
					<button
						type="submit"
						class="block w-full mt-3 bg-indigo hover:bg-indigo-7 focus-visible:outline-indigo-11 transition-colors duration-100 text-white font-medium tracking-wide px-4 py-2 border-white rounded"
						>Sign Waiver</button
					>
				</form>
			{/if}
			{#if submitted}
				<p class="text-center">Thank you for signing the waiver.</p>
			{/if}
		</section>
	{/if}
</div>
