<script lang="ts">
	export let dayOfWeek: string;
	export let location: string;
	export let eventName: string;
	export let eventTime: string;
</script>

<li class="border rounded-lg p-4 block bg-indigo-12 text-indigo-1">
	<h3 class="font-serif font-medium text-center text-xl tracking-wider ">{dayOfWeek}</h3>
	<div class="flex flex-col gap-1 justify-center items-center mt-3">
		<p class="text-xl">{eventName}</p>
		<p>{eventTime}</p>
		<p>{location}</p>
	</div>
</li>
