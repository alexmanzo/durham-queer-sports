<script>
	import { fade, fly } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import { queryStore, gql, getContextClient } from '@urql/svelte';
	import ScheduleItem from '$lib/components/ScheduleItem.svelte';

	const scheduleContent = queryStore({
		client: getContextClient(),
		query: gql`
			query RecurringEvents {
				recurringEvents {
					league
					dayOfWeek
					time
					location
				}
			}
		`
	});
</script>

{#if !$scheduleContent.fetching}
	<section>
		<h1 class="font-serif font-normal text-center text-xl lg:text-4xl" in:fade={{ duration: 200 }}>Schedule</h1>
		<ul class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-7" in:fly={{ y: 200, duration: 250, easing: sineOut }}>
			{#each $scheduleContent.data.recurringEvents as event}
				<ScheduleItem
					dayOfWeek={event.dayOfWeek}
					location={event.location}
					eventName={event.league}
					eventTime={event.time}
				/>
			{/each}
		</ul>
	</section>
{/if}