<script>
  import { appStore, mutations, retrievers } from '@/stores'
  import Chance from 'chance'
  const chance = new Chance()

  let task = {
    title: '',
    workspace: '',
    completed: false,
  }

  const clear = () => {
    task = {
      title: '',
      workspace: task.workspace,
      completed: false,
    }
  }

  const handleSubmit = (task) => {
    const workspace = retrievers.getCurrentWorkspace()
    const data = {
      id: chance.guid(),
      title: task.title,
      completed: task.completed,
      createdAt: new Date(),
      updatedAt: new Date(),
      emoji: workspace.emoji,
    }

    mutations.addTask(data)
    clear()
  }
</script>

<form
  on:submit|preventDefault={() => handleSubmit(task)}
  class="my-4 py-4 px-4 flex gap-2 items-center justify-between bg-white rounded-2xl"
>
  <div class="flex items-center gap-2">
    <input type="checkbox" class="checkbox" bind:checked={task.completed} />
    <input
      class="
          w-full
          py-0
          bg-neutral-100
          text-lg
          placeholder:text-neutral-500
          outline-none
        "
      placeholder="Write a new task"
      bind:value={task.title}
      type="text"
    />
  </div>
  <div>
    <select
      bind:value={task.workspace}
      class="form-select border-none py-0 focus:ring-0"
    >
      <option selected disabled value="">Select</option>
      {#each $appStore.workspaces as workspace}
        <option value={workspace.id}>{workspace.name}</option>
      {/each}
    </select>
  </div>
</form>
