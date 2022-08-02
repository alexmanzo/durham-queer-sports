<script>
	import { supabase } from '$lib/supabaseClient';

	let imgSrc;
	let imgAlt;
	async function downloadImage(node, imgId) {
		try {
			const { data, error } = await supabase.from('images').select('src, alt').eq('id', imgId);

			imgSrc = data[0].src;
			imgAlt = data[0].alt;
		} catch (error) {
			console.error('Error downloading image: ', error.message);
		}
	}
</script>

<section id="about" class="lg:my-24 md:my-20 my-10">
	<div class="flex flex-col items-center justify-between gap-10 md:flex-row">
		<div class="flex-1">
			<h2 class="text-3xl mb-5 font-serif font-semibold">About DQS</h2>
			<p>
				Durham Queer Sports is an association of <strong>free</strong> social sports leagues for
				queer and trans people around North Carolina's Triangle region. There's
				<strong>no registration, no fees and no attendance requirements</strong> &ndash; just show up
				when you want to and play/watch as much or as little as you like.
			</p>
			<p class="mt-3">
				New players and spectators of <strong
					>all levels, bodies and backgrounds are always welcome</strong
				> (even at the last game of the season!) Kids welcome & dogs (on leash) welcome unless otherwise
				specified.
			</p>
		</div>
		<div class="flex-1">
			<img class="rounded-2xl" src={imgSrc} alt={imgAlt} use:downloadImage={1} />
		</div>
	</div>
</section>
