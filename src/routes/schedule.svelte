<script>
import Header from "$lib/components/Header.svelte";
import ScheduleItem from "$lib/components/ScheduleItem.svelte";
</script>

<section>
        <h1 class="font-serif font-normal text-center text-xl lg:text-4xl">Schedule</h1>
	<ul class="grid md:grid-cols-2 gap-4 mt-7">
                <ScheduleItem dayOfWeek="Monday" location="Forest Hills Park (Sculpture Field)" eventName="Soccer" eventTime="5:30PM" />
                <ScheduleItem dayOfWeek="Tuesday" location="Hope Valley Farms YMCA" eventName="Tennis" eventTime="5:30PM" />
                <ScheduleItem dayOfWeek="Thursday" location="Hope Valley Farms YMCA" eventName="Tennis" eventTime="5:30PM" />
                <ScheduleItem dayOfWeek="Sunday" location="Forest Hills Park (Sculpture Field)" eventName="Ultimate" eventTime="2:00PM" />
                <ScheduleItem dayOfWeek="Sunday" location="Forest Hills Park" eventName="Kickball" eventTime="3:30PM" />
  </ul>
</section>
