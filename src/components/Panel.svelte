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

<button
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
    border: none;
  }
  .panel:hover {
    filter: brightness(80%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  button:active {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px!important;
  }
</style>
