<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import { createClient, mutationStore, queryStore, gql, getContextClient } from '@urql/svelte';

	const waiverContent = queryStore({
		client: getContextClient(),
		query: gql`
			query GetWaiver {
				waiver(where: { id: "cle64zpu217j609lmrqn581le" }) {
					season
					waiverContent {
						html
					}
				}
			}
		`
	});

	let firstName: string;
	let lastName: string;
	let email: string;
	let agree: boolean;
	let honeypotField: string | undefined;
	let submitted = false;
	let result;

	const mutationClient = createClient({ url: import.meta.env.VITE_HYGRAPH_CONTENT_ENDPOINT });

	const signWaiver = async () => {
		if (agree && !honeypotField) {
			result = mutationStore({
				client: mutationClient,
				query: gql`
					mutation SignWaiver(
						$email: String = ""
						$firstName: String = ""
						$lastName: String = ""
					) {
						createWaiverSignature(
							data: { firstName: $firstName, lastName: $lastName, email: $email }
						) {
							firstName
							createdAt
						}
					}
				`,
				variables: { firstName, lastName, email }
			});

			if ($result) {
				submitted = true;
			}
		} else {
			alert('You must agree to the terms of the waiver.');
		}
	};
</script>

<div class="prose mx-auto lg:py-10 py-6">
	<section>
		{#if !$waiverContent.fetching}
			<div in:fly={{ y: 200, duration: 250, easing: sineOut }}>
				<div in:fade={{ duration: 200 }}>
					<h1 class="font-serif font-normal text-center text-xl lg:text-4xl">
						Durham Queer Sports<br />Participant Assumption of Risk and Release of Liability
					</h1>

					<p class="text-center" in:fade={{ duration: 300 }}>
						{$waiverContent.data.waiver.season} Season
					</p>
					{@html $waiverContent.data.waiver.waiverContent.html}
				</div>
			</div>
		{/if}
	</section>
	{#if !$waiverContent.fetching}
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
