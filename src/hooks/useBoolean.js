import { writable } from 'svelte/store'

/**
 *
 * @param { boolean } initialValue
 * @returns { [import('svelte/store').Writable<boolean>, () => void] }
 */
export default function useBoolean(initialValue = false) {
  const state = writable(initialValue)
  const toggle = () => {
    state.update((v) => !v)
  }

  return [state, toggle]
}
