<script>
	import { fade, fly } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import { queryStore, gql, getContextClient } from '@urql/svelte';

	const aboutContent = queryStore({
		client: getContextClient(),
		query: gql`
			query AboutPage {
				aboutPages {
					pageContent {
						... on TextContent {
							id
							text {
								html
							}
						}
						... on TextImage {
							id
							image {
								url
								altText
							}
							text {
								html
							}
						}
					}
				}
			}
		`
	});
</script>

{#if !$aboutContent.fetching}
	<div class="about-page prose lg:prose-lg lg:max-w-5xl mx-auto">
		<h1 class="font-serif font-normal text-center text-xl lg:text-4xl" in:fade={{ duration: 200 }}>
			About Durham Queer Sports
		</h1>
		{#each $aboutContent.data.aboutPages[0].pageContent as section}
			<div class="about-page__section lg:flex justify-between items-center gap-7" in:fly={{ y: 200, duration: 250, easing: sineOut }}>
				<div class="flex-1">
					{@html section.text.html}
				</div>
				{#if section.image}
					<div class="flex-1">
						<img src={section.image.url} alt={section.image.altText} class="rounded-2xl" />
					</div>
				{/if}
			</div>
		{/each}
	</div>
{/if}

<style>
	.about-page__section:nth-child(2n) {
		flex-direction: row-reverse;
	}
</style>
