<script>
import Header from "$lib/components/Header.svelte";
import ScheduleItem from "$lib/components/ScheduleItem.svelte";
</script>

<section>
	<h1 class="font-serif font-normal text-center text-xl lg:text-4xl">Schedule</h1>
	<ul class="grid md:grid-cols-2 gap-4 mt-7">
    <ScheduleItem dayOfWeek="Monday" location="George Watts Elementary" eventName="Soccer" />
    <ScheduleItem dayOfWeek="Tuesday" location="Hope Valley Farms YMCA" eventName="Tennis" />
    <ScheduleItem dayOfWeek="Wednesday" location="Forest Hills Park" eventName="Kickball" />
    <ScheduleItem dayOfWeek="Thursday" location="Hope Valley Farms YMCA" eventName="Tennis" />
    <ScheduleItem dayOfWeek="Sunday" location="Forest Hills Park (Sculpture Field)" eventName="Ultimate" />
  </ul>
</section>
