<script>
  import { appStore, mutations } from '@/stores'
  import useBoolean from '@/hooks/useBoolean'
  import CreateWorkspaceModal from '@/components/workspace/CreateWorkspaceModal.svelte'

  let [workspaceModal, toggleWorkspaceModal] = useBoolean(false)

  const makeSelectionFunction = (idx) => () => {
    mutations.updateCurrentWorkspace(idx)
  }
</script>

{#if $workspaceModal}
  <CreateWorkspaceModal deRender={toggleWorkspaceModal} />
{/if}

<nav class="h-screen w-96 bg-white rounded-xl p-12">
  <div class="m-1">
    <ul class="grid gap-4">
      {#each $appStore.workspaces as workspace, idx}
        <li
          class="
          py-2 px-4
          flex items-center justify-between
          rounded-xl
          transition ease-in-out duration-300
          cursor-pointer
        "
          on:click={makeSelectionFunction(idx)}
          class:bg-gray-200={idx === $appStore.currentWorkspace}
        >
          <p>{workspace.emoji} {workspace.name}</p>
          <p
            class="w-8 h-8 grid place-items-center bg-gray-100 rounded-lg text-neutral-500"
          >
            {workspace.tasks.length}
          </p>
        </li>
      {/each}
      <li
        class="
          py-2 px-4
          flex items-center justify-between
          rounded-xl
          transition ease-in-out duration-300
          cursor-pointer
          bg-gray-200
          "
        on:click={toggleWorkspaceModal}
      >
        <span>Create workspace</span>
        <button
          class="w-8 h-8 grid place-items-center bg-gray-100 rounded-lg text-neutral-500"
        >
          +
        </button>
      </li>
    </ul>
  </div>
</nav>
