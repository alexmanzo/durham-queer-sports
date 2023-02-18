<script>
	import { queryStore, gql, getContextClient } from '@urql/svelte';

	const aboutHomeContent = queryStore({
		client: getContextClient(),
		query: gql`
			query HomeAbout {
				homepageSection(where: { id: "clea2etcx37n209lmljopnteo" }) {
					header
					text {
						html
					}
					image {
						altText
						url
					}
				}
			}
		`
	});
</script>

<section id="about" class="lg:my-24 md:my-20 my-10">
	<div class="flex flex-col items-center justify-between gap-10 md:flex-row">
		{#if !$aboutHomeContent.fetching}
			<div class="flex-1">
				<h2 class="text-3xl mb-5 font-serif font-medium tracking-wide">
					{$aboutHomeContent.data.homepageSection.header}
				</h2>
				<div>
					{@html $aboutHomeContent.data.homepageSection.text.html}
				</div>
			</div>
			<div class="flex-1">
				<img
					class="rounded-2xl"
					src={$aboutHomeContent.data.homepageSection.image.url}
					alt={$aboutHomeContent.data.homepageSection.image.altText}
				/>
			</div>
		{/if}
	</div>
</section>
