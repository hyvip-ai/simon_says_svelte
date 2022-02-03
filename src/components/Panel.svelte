<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let bgColor = "";
  export let rotation = "";
  export let className = "";
  const panleClickHandler = (e) => {
    dispatch("panel_click", e.originalTarget.dataset.click);
  };
</script>

<div
  class="panel {className}"
  on:click={panleClickHandler}
  style="transform:rotate({rotation}deg);background-color: {bgColor};"
  data-click={bgColor}
/>

<style>
  .panel {
    height: 250px;
    width: 250px;
    border-radius: 100% 0% 0% 0%;
    margin: 5px;
    cursor: pointer;
  }
  .panel:hover {
    filter: brightness(50%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
</style>
