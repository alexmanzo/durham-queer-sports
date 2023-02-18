<script lang="ts">
	import { queryStore, gql, getContextClient } from '@urql/svelte';

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
	<div class="bg-indigo text-white px-3 py-2">
		<div class="max-w-3/4 text-center mx-auto">
			{#each $alertContent.data.alerts as alert}
				<p class="mb-2"><strong>{alert.title}</strong></p>
				{@html alert.content.html}
        <p class="text-xs mt-2">Last updated at: {new Date(alert.updatedAt).toLocaleString()}</p>
			{/each}
		</div>
	</div>
{/if}

