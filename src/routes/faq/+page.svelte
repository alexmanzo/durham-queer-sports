<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import { queryStore, gql, getContextClient } from '@urql/svelte';
	const faqContent = queryStore({
		client: getContextClient(),
		query: gql`
			query FAQ {
				faqPage(where: { id: "clf7iccia3hc60blfc5s5docv" }) {
					questions {
						... on FaqQuestionAnswer {
							question
							answer {
								html
							}
						}
					}
				}
			}
		`
	});
</script>

{#if !$faqContent.fetching}
	<section class="prose mx-auto pb-20">
		<h1 class="font-serif font-normal text-center text-xl lg:text-4xl" in:fade={{ duration: 200 }}>
			Frequently Asked Questions
		</h1>
		<div in:fly={{ y: 200, duration: 250, easing: sineOut }}>
			{#each $faqContent.data?.faqPage.questions as question}
				<h3>
					{question.question}
				</h3>
				{@html question.answer.html}
			{/each}
		</div>
	</section>
{/if}