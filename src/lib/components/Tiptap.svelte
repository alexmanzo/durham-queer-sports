<script>
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Link from '@tiptap/extension-link';
	import { waiverContent } from '$lib/stores/waiverStore';

	let element;
	let editor;
	let json;
	let content;

	waiverContent.subscribe((value) => {
		content = value;
	});

	const setLink = () => {
		const previousUrl = editor.getAttributes('link').href;
		const url = window.prompt('URL', previousUrl);

		// cancelled
		if (url === null) {
			return;
		}

		// empty
		if (url === '') {
			this.editor.chain().focus().extendMarkRange('link').unsetLink().run();

			return;
		}

		// update link
		editor.chain().focus().extendMarkRange('link').setLink({ href: url, target: '_blank' }).run();
	};

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit, Link],
			content,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
			onBlur: ({ editor }) => {
				const json = editor.getJSON();
				// waiverContent.set(json);
				waiverContent.update(() => json);
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div class="flex flex-row-reverse gap-7 py-5">
	{#if editor}
		<div class="editor flex-1 flex flex-wrap gap-1 max-h-20">
			<button
				on:click={() => editor.chain().focus().toggleBold().run()}
				class={editor.isActive('bold') ? 'is-active' : ''}
			>
				bold
			</button>
			<button
				on:click={() => editor.chain().focus().toggleItalic().run()}
				class={editor.isActive('italic') ? 'is-active' : ''}
			>
				italic
			</button>
			<button
				on:click={() => editor.chain().focus().setParagraph().run()}
				class={editor.isActive('paragraph') ? 'is-active' : ''}
			>
				paragraph
			</button>
			<button
				on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				class={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
			>
				h2
			</button>
			<button
				on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				class={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
			>
				h3
			</button>
			<button
				on:click={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
				class={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
			>
				h4
			</button>
			<button
				on:click={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
				class={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
			>
				h5
			</button>
			<button
				on:click={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
				class={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
			>
				h6
			</button>
			<button
				on:click={() => editor.chain().focus().toggleBulletList().run()}
				class={editor.isActive('bulletList') ? 'is-active' : ''}
			>
				bullet list
			</button>
			<button
				on:click={() => editor.chain().focus().toggleOrderedList().run()}
				class={editor.isActive('orderedList') ? 'is-active' : ''}
			>
				numbered list
			</button>
			<button on:click={setLink} class={editor.isActive('link') ? 'is-active' : ''}>
				setLink
			</button>
			<button
				on:click={() => editor.chain().focus().unsetLink().run()}
				:disabled="!editor.isActive('link')"
			>
				unsetLink
			</button>
			<button on:click={() => editor.chain().focus().undo().run()}> undo </button>
			<button on:click={() => editor.chain().focus().redo().run()}> redo </button>
		</div>
	{/if}
	<div class="flex-1">
		<div bind:this={element} />
	</div>
</div>

<style>
	.editor button {
		@apply rounded bg-white px-2 border-2 border-black;
	}

	.editor button:hover {
		@apply bg-opacity-5 bg-black;
	}

	.editor button.active {
		@apply bg-black text-white;
	}
</style>
