<script>
  export let show = false;
  export let data = ""
  import { scale } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const clickHandler = () => {
    dispatch("reset");
  };
</script>

{#if show}
<main class="backdrop">
    <div class="main_content" transition:scale>
      <p class="message">{data}</p>
      <button on:click={clickHandler}>Start Again</button>
    </div>
  </main>
{/if}

<style>
  .backdrop {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    z-index: 50;
  }
  .main_content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 5px;
    padding: 2rem;
    color: black;
  }
  .main_content button {
    display: block;
    padding: 0.8rem;
    border-radius: 5px;
    font-weight: bold;
    margin: 0px auto;
    border: none;
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .main_content button:active {
    box-shadow: none;
    transform: scale(0.95);
  }
  p{
    text-align: center;
    margin-bottom: 1rem;
  }
</style>
