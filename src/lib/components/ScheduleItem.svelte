<script>
	export let dayOfWeek;
	export let location;
	export let eventName;
</script>

<li class="border rounded-lg p-4 block bg-indigo-12 text-indigo-1">
	<h2 class="font-serif font-medium text-center text-xl tracking-wider ">{dayOfWeek}</h2>
	<div class="flex flex-col gap-1 justify-center items-center mt-3">
		<p class="text-xl">{eventName}</p>
		<p>6:00 PM</p>
		<p>{location}</p>
	</div>
</li>
