<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import { queryStore, gql, getContextClient } from '@urql/svelte';
	import ScheduleItem from '$lib/components/ScheduleItem.svelte';
	const sportScheduleContent = queryStore({
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

	const eventContent = queryStore({
		client: getContextClient(),
		query: gql`
			query GetEvents($expires_gte: DateTime) {
				events(where: { eventDateTime_gte: $expires_gte }) {
					eventTitle
					eventDateTime
					eventDescription {
						html
					}
					location {
						streetAddress
						streetAddressLine2
						city
						mapLocation {
							latitude
							longitude
						}
					}
				}
			}
		`,
		variables: { expires_gte: new Date().toISOString() }
	});

	const sortedSportSchedule = (schedule: App.RecurringEvent[]) => {
		const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		return schedule.sort((a: App.RecurringEvent, b: App.RecurringEvent) => {
			return days.indexOf(a.dayOfWeek) - days.indexOf(b.dayOfWeek);
		});
	};

	const formatDateString = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-us', {
			weekday: 'long',
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	};

	const formatTime = (dateString: string) => {
		const time = new Date(dateString);
		return time.toLocaleTimeString('en-us', { hour: 'numeric', minute: 'numeric' });
	};
</script>

<h1 class="font-serif font-normal text-center text-2xl lg:text-4xl" in:fade={{ duration: 200 }}>
	Events
</h1>
{#if !$eventContent.fetching && $eventContent.data?.events.length > 0}
	<section class="mt-7" in:fly={{ y: 50, duration: 250, easing: sineOut }}>
		<h2 class="font-serif font-normal text-center text-xl lg:text-2xl" in:fade={{ duration: 200 }}>
			Upcoming Events
		</h2>
		<ul class="mt-7">
			{#each $eventContent.data?.events as event}
				<li class="border rounded-lg p-4 block bg-indigo-12 text-indigo-1 text-center">
					<h3 class="font-serif font-medium text-center text-xl tracking-wider ">
						{event.eventTitle}
					</h3>
					<div class="prose mx-auto">
						<h4 class="font-serif font-medium text-center text-lg tracking-wider mt-2 mb-0">
							Date
						</h4>
						<p>
							{formatDateString(event.eventDateTime)}<br />
							{formatTime(event.eventDateTime)}
						</p>
						<h4 class="font-serif font-medium text-center text-lg tracking-wider mt-2 mb-0">
							About
						</h4>
						<div class="max-w-md mx-auto -mt-5">{@html event.eventDescription.html}</div>
						<h4 class="font-serif font-medium text-center text-lg tracking-wider mt-2 mb-0">
							Location
						</h4>
						<p>
							{event.location.streetAddress}<br />
							{event.location.streetAddressLine2}<br />
							{event.location.city}, NC<br />
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={`https://www.google.com/maps/search/?api=1&query=${event.location.mapLocation.latitude},${event.location.mapLocation.longitude}`}
								>Open <span class="sr-only">{event.location.streetAddress}</span> in Google Maps</a
							>
						</p>
					</div>
				</li>
			{/each}
		</ul>
	</section>
{/if}
{#if !$sportScheduleContent.fetching}
	<section class="mt-7 pb-5" in:fly={{ y: 400, duration: 250, easing: sineOut }}>
		<h2 class="font-serif font-normal text-center text-xl lg:text-2xl" in:fade={{ duration: 200 }}>
			Weekly Sport Schedule
		</h2>
		<ul class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-7">
			{#each sortedSportSchedule($sportScheduleContent.data?.recurringEvents) as event}
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
