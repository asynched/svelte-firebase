<script>
  import { flip } from 'svelte/animate'

  import { currentWorkspaceStore } from '@/stores'

  import Navbar from '@/components/ui/Navbar.svelte'
  import TaskForm from '@/components/form/TaskForm.svelte'
  import TaskItem from '@/components/tasks/TaskItem.svelte'
</script>

<div class="flex">
  <Navbar />
  <main class="mx-auto w-[90%] max-w-screen-md">
    <header class="my-8">
      <h1 class="text-4xl">
        {$currentWorkspaceStore.name}
        {$currentWorkspaceStore.emoji}
      </h1>
      <h2 class="text-2xl font-light text-neutral-600">
        Today is {Intl.DateTimeFormat('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        }).format(new Date())}
      </h2>
    </header>

    <TaskForm />

    <section name="card-section" class="grid gap-4">
      {#each $currentWorkspaceStore.tasks as task (task.id)}
        <div animate:flip>
          <TaskItem {task} />
        </div>
      {/each}
    </section>
  </main>
</div>
