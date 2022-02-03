<script>
  import Panel from "./components/Panel.svelte";
  import { flashPanel } from "./functions/flashPanel";
  import { matchedValues } from "./functions/gameLogic";
  import { onMount } from "svelte";
  let userEnterdColours = [];
  let flashedColor = [];
  let red, green, blue, yellow;
  onMount(() => {
    red = document.querySelector(".top_left");
    blue = document.querySelector(".top_right");
    yellow = document.querySelector(".bottom_right");
    green = document.querySelector(".bottom_left");
    flashedColor = [red, green, blue, yellow];
    // startGame();
  });

  const panelClick = ({ detail: color }) => {
    userEnterdColours.push(color);
    console.log(userEnterdColours);
  };
  const startGame = async () => {
    for (let panel of flashedColor) {
      await flashPanel(panel);
    }
  };
  const getResults = () => {
    matchedValues(flashedColor, userEnterdColours);
  };
</script>

<main>
  <div class="game_board">
    <div class="game_row">
      <Panel
        on:panel_click={panelClick}
        className="top_left"
        bgColor="red"
        rotation="0"
      />
      <Panel
        on:panel_click={panelClick}
        className="top_right"
        bgColor="blue"
        rotation="90"
      />
    </div>
    <div class="game_row">
      <Panel
        on:panel_click={panelClick}
        className="bottom_left"
        bgColor="green"
        rotation="-90"
      />
      <Panel
        on:panel_click={panelClick}
        className="bottom_right"
        bgColor="yellow"
        rotation="180"
      />
    </div>
    <div class="center" />
  </div>
  <button
    on:click={() => {
      getResults();
    }}>Check results</button
  >
</main>

<style>
  main {
    text-align: center;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .game_board {
    position: relative;
  }

  .game_row {
    display: flex;
  }
  .center {
    height: 280px;
    width: 280px;
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 18px;
    border-radius: 8px;
    border: none;
    outline: none;
    margin-top: 15px;
    cursor: pointer;
  }
</style>
