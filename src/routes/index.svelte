<script>
	import * as animateScroll from 'svelte-scrollto';
	import '@fontsource/fraunces/variable-full.css';
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

<header class="flex md:flex-row flex-col gap-4 md:gap-0 justify-between items-center py-5">
	<h1 class="font-bold text-3xl font-serif">Durham Queer Sports</h1>
	<nav class="w-full md:w-auto flex items-center justify-center md:justify-between gap-7">
		<a on:click={() => animateScroll.scrollTo({ element: '#about' })} href="#about">About</a>
		<a on:click={() => animateScroll.scrollTo({ element: '#leagues' })} href="#leagues">Leagues</a>
		<a
			href="mailto:durhamqueersports@gmail.com"
			target="_blank"
			class="bg-cyan-800 hover:bg-cyan-900 transition-colors duration-100 text-white font-medium tracking-wide px-4 py-2 border-white rounded"
			>Contact Us</a
		>
	</nav>
</header>

<main>
	<section
		class="flex flex-col items-center justify-between md:flex-row-reverse lg:my-24 md:my-20 my-10"
	>
		<div class="flex-1 leading-normal text-3xl">
			<p class="text-center md:text-left">
				At Durham Queer Sports, our mission is to create a <strong
					>free, empowering, social, and athletic</strong
				>
				space for the Triangle's Queer community.
			</p>
		</div>
		<div class="flex-1">
			<script
				src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
			<lottie-player
				src="https://assets3.lottiefiles.com/private_files/lf30_fmcseocu.json"
				mode="bounce"
				background="transparent"
				speed="1"
				loop
				autoplay
				class="mt-8 md:mt-0 max-w-full md:max-w-lg"
			/>
		</div>
	</section>
	<section id="about" class="lg:my-24 md:my-20 my-10">
		<div class="flex flex-col items-center justify-between gap-10 md:flex-row">
			<div class="flex-1">
				<h2 class="text-3xl mb-5 font-serif font-semibold">About DQS</h2>
				<p>
					Durham Queer Sports is an association of <strong>free</strong> social sports leagues for
					queer and trans people around North Carolina's Triangle region. There's
					<strong>no registration, no fees and no attendance requirements</strong> &ndash; just show
					up when you want to and play/watch as much or as little as you like.
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
	<section id="leagues" class="lg:my-24 md:my-20 my-10">
		<div class="flex flex-col items-center justify-between gap-10 md:flex-row">
			<div class="flex-1">
				<h2 class="text-3xl mb-5 font-serif font-semibold">Leagues</h2>
				<p>Join Facebook groups for each of our leagues to stay up to date on upcoming events.</p>
				<ul class="grid md:grid-cols-3 gap-4 mt-5">
					<li>
						<a
							class="border rounded-lg p-4 block hover:bg-slate-50 hover:underline"
							href="https://www.facebook.com/groups/DurhamQueerKickball"
							target="_blank">Kickball</a
						>
					</li>
					<li>
						<a
							class="border rounded-lg p-4 block hover:bg-slate-50 hover:underline"
							href="https://www.facebook.com/groups/446538442593552"
							target="_blank">Soccer</a
						>
					</li>
					<li>
						<a
							class="border rounded-lg p-4 block hover:bg-slate-50 hover:underline"
							href="https://www.facebook.com/groups/DurmQueerBball/"
							target="_blank">Basketball</a
						>
					</li>
					<li>
						<a
							class="border rounded-lg p-4 block hover:bg-slate-50 hover:underline"
							href="https://www.facebook.com/groups/2198858146817694/"
							target="_blank">Ultimate</a
						>
					</li>
					<li>
						<a
							class="border rounded-lg p-4 block hover:bg-slate-50 hover:underline"
							href="https://www.facebook.com/groups/2227800064187253/"
							target="_blank">Run club</a
						>
					</li>
					<li>
						<a
							class="border rounded-lg p-4 block hover:bg-slate-50 hover:underline"
							href="https://www.facebook.com/groups/durhamqueertennis"
							target="_blank">Tennis</a
						>
					</li>
				</ul>
			</div>
		</div>
	</section>
</main>
