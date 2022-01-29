<script>
  import { slide } from 'svelte/transition'

  export let deRender = () => void 0
</script>

<div
  class="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
  on:click={deRender}
  in:slide
  out:slide
>
  <div
    on:click|stopPropagation
    class="bg-white max-w-lg w-[90%] p-12 rounded-2xl shadow-xl"
  >
    <slot />
  </div>
</div>
