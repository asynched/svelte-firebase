<script>
  import { fade } from 'svelte/transition'

  import Modal from '@/components/ui/Modal.svelte'
  import EmojiPicker from '@/lib/components/EmojiPicker.svelte'

  export let deRender = () => void 0

  let workspaceInfo = {
    name: '',
    emoji: '',
  }

  let pickEmoji = false

  const togglePickEmoji = () => {
    pickEmoji = !pickEmoji
  }

  const setWorkspaceEmoji = (emoji) => {
    workspaceInfo.emoji = emoji
    togglePickEmoji()
  }

  const handleSubmit = () => {
    deRender()
  }
</script>

<Modal {deRender}>
  <h1 class="mb-4 text-2xl text-center">Choose the workspace name</h1>
  <form class="flex flex-col" on:submit|preventDefault={handleSubmit}>
    <div class="flex items-center gap-2 w-full">
      <input
        type="text"
        class="form-input border-gray-400 border-none bg-gray-200 rounded-lg focus:ring-0 flex-1"
        placeholder="Something cool..."
        bind:value={workspaceInfo.name}
      />
      <div class="relative">
        {#if pickEmoji}
          <div in:fade out:fade>
            <EmojiPicker onPick={setWorkspaceEmoji} />
          </div>
        {/if}
        <button
          type="button"
          on:click={togglePickEmoji}
          class="p-0 text-center h-10 w-10 form-input border-gray-400 border-none bg-gray-200 rounded-lg focus:ring-0"
        >
          {workspaceInfo.emoji || '😸'}
        </button>
      </div>
    </div>
    <button
      class="mt-4 py-2 px-4 rounded-lg bg-gray-200 transtion duration-300 hover:brightness-95"
      >Create</button
    >
  </form>
</Modal>
