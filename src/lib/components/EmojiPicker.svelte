<script>
  import {
    gestures,
    smileys,
    people,
    accessories,
    animals,
    food,
    sports,
    travel,
  } from './emojis'

  export let onPick = (value) => void 0

  let search = ''
  let current = 0
  const emojis = [
    smileys,
    gestures,
    people,
    accessories,
    animals,
    food,
    sports,
    travel,
  ]

  const toggleCurrent = (next) => {
    current = next
    search = ''
  }

  $: computed = emojis
    .filter((category, idx) =>
      search ? category.name.includes(search) : idx === current
    )
    .flatMap((category) => category.emojis)
</script>

<div class="emoji-container">
  <input
    class="emoji-container__input"
    type="text"
    placeholder="Search..."
    bind:value={search}
  />
  <div class="emoji-container__category">
    {#each emojis as emoji, idx}
      <button
        type="button"
        title={emoji.name}
        class:active={idx === current}
        on:click={() => toggleCurrent(idx)}
      >
        {emoji.base}
      </button>
    {/each}
  </div>
  <section class="emoji-section">
    <div class="emoji-picker">
      {#each computed as emoji}
        <button
          type="button"
          on:click={() => onPick(emoji)}
          class="emoji-picker__item">{emoji}</button
        >
      {/each}
    </div>
  </section>
</div>

<style>
  :root {
    --border: #ddd;
    --primary: #f0f0f0;

    --scrollbar-track: #ddd;
    --scrollbar-thumb: #ccc;
  }

  .emoji-container {
    position: absolute;
    background: var(--primary);

    display: flex;
    flex-direction: column;

    width: 20rem;
    height: 24rem;

    border: 1px solid var(--border);
    border-radius: 0.5rem;

    overflow: hidden;
  }

  .emoji-container__input {
    margin: 0.5rem auto;
    padding: 0.45rem 0.5rem;

    width: 95%;

    border: 1px solid var(--border);
    border-radius: 0.25rem;

    outline: none;
  }

  .emoji-container__category {
    margin: 0.5rem auto 0.5rem;
  }

  .emoji-container__category button {
    border: none;
    font-size: 20px;
    cursor: pointer;
    transform: scale(0.8);
    transition: all ease-in-out 250ms;
  }

  .emoji-container__category button.active {
    transform: scale(1);
  }

  .emoji-section {
    flex: 1;
    overflow-y: scroll;
    padding-bottom: 0.75rem;
  }

  .emoji-section::-webkit-scrollbar {
    width: 0.25rem;
  }

  .emoji-section::-webkit-scrollbar-track {
    background: var(--scrollbar-track);
  }

  .emoji-section::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
  }

  .emoji-picker {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5rem 0;
  }

  .emoji-picker__item {
    border: none;

    background: inherit;

    font-size: 20px;

    cursor: pointer;
  }
</style>
