<script lang="ts">
	import { queryStore, gql, getContextClient } from '@urql/svelte';
	import { sineOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	const alertContent = queryStore({
		client: getContextClient(),
		query: gql`
			query GetAlerts($expires_gte: DateTime) {
				alerts(where: { expires_gte: $expires_gte }) {
					title
					updatedAt
					content {
						html
					}
				}
			}
		`,
		variables: { expires_gte: new Date().toISOString() }
	});
</script>

{#if $alertContent.data?.alerts.length > 0}
	<div class="px-2 my-5 lg:w-3/4 mx-auto" in:fly={{ y: 200, duration: 250, easing: sineOut }}>
		<div class="bg-indigo-12 text-indigo px-3 py-2 mx-auto border-indigo rounded-md border" in:fade={{ duration: 200 }}>
			<div class="text-center mx-auto">
				{#each $alertContent.data.alerts as alert}
					<p class="mb-2"><strong>{alert.title}</strong></p>
					{@html alert.content.html}
					<p class="text-xs mt-2">Last updated at: {new Date(alert.updatedAt).toLocaleString()}</p>
				{/each}
			</div>
		</div>
	</div>
{/if}
