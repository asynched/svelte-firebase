import Chance from 'chance'
import { writable, derived, get } from 'svelte/store'
import { makeTask } from '@/utils'

const chance = new Chance()

export const appStore = writable({
  currentWorkspace: 0,
  workspaces: [
    {
      id: chance.guid(),
      name: 'Road trip',
      emoji: '🚗',
      tasks: Array(5).fill(null).map(makeTask('🚗')),
    },
    {
      id: chance.guid(),
      name: 'Work',
      emoji: '💼',
      tasks: Array(8).fill(null).map(makeTask('💼')),
    },
    {
      id: chance.guid(),
      name: 'Personal',
      emoji: '👩‍💻',
      tasks: Array(10).fill(null).map(makeTask('👩‍💻')),
    },
  ],
})

export const mutations = {
  updateCurrentWorkspace(id) {
    appStore.update((state) => {
      state.currentWorkspace = id
      return state
    })
  },
  removeTask(taskId) {
    appStore.update((state) => {
      const workspace = state.workspaces[state.currentWorkspace]
      workspace.tasks = workspace.tasks.filter((task) => task.id !== taskId)
      return state
    })
  },
  addTask(task) {
    appStore.update((state) => {
      const workspace = state.workspaces[state.currentWorkspace]
      workspace.tasks.push(task)
      return state
    })
  },
}

export const retrievers = {
  getCurrentWorkspace() {
    const state = get(appStore)
    return state.workspaces[state.currentWorkspace]
  },
}

export const currentWorkspaceStore = derived(appStore, ($store) => {
  const { workspaces } = $store
  return workspaces[$store.currentWorkspace]
})
