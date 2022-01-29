<script>
  import { currentWorkspaceStore, mutations } from '@/stores'

  import { fly } from 'svelte/transition'
  export let task

  const handleRemoveClick = (taskId) => {
    mutations.removeTask(taskId)
  }
</script>

<div
  on:click={() => handleRemoveClick(task.id)}
  in:fly={{ x: -80 }}
  out:fly={{ x: 80 }}
  class="
    py-4 px-4
    flex items-center justify-between
    bg-white
    rounded-2xl
    shadow-md shadow-neutral-200
    cursor-pointer
  "
>
  <div class="flex items-center gap-2">
    <input
      class="checkbox"
      bind:checked={task.completed}
      on:click|stopPropagation
      type="checkbox"
    />
    <p>{task.title}</p>
  </div>
  <p>
    {$currentWorkspaceStore.name}
    {task.emoji}
  </p>
</div>
