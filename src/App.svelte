<script>
  import Panel from "./components/Panel.svelte";
  import { flashPanel } from "./functions/flashPanel";
  import { matchedValues } from "./functions/gameLogic";
  import { onMount } from "svelte";
  import { getRandom } from "./functions/sideFunctions";
  import ScoreBoard from "./components/ScoreBoard.svelte";
  import WinModal from "./components/WinModal.svelte";
  let userEnterdColours = [];
  let flashedColor = [];
  let red, green, blue, yellow, game_board;
  let random = [];
  let round = 1;
  let score = 0;
  let show;
  let data;
  let matchresults;
  onMount(() => {
    red = document.querySelector(".top_left");
    blue = document.querySelector(".top_right");
    yellow = document.querySelector(".bottom_right");
    green = document.querySelector(".bottom_left");
    game_board = document.querySelector(".game_board");
    random = [red, green, blue, yellow];
    startGame();
  });

  const panelClick = ({ detail: color }) => {
    userEnterdColours.push(color);
    console.log(userEnterdColours);
  };
  const updateFlashedColor = () => {
    if (round === 1) {
      for (let i = 0; i < 3; i++) {
        flashedColor = [...flashedColor, random[getRandom(random.length)]];
      }
    } else {
      for (let i = 0; i < 2; i++) {
        flashedColor = [...flashedColor, random[getRandom(random.length)]];
      }
    }
  };
  const startGame = async () => {
    updateFlashedColor();
    game_board.classList.add("disable");
    for (let panel of flashedColor) {
      await flashPanel(panel);
    }
    game_board.classList.remove("disable");
  };
  const getResults = () => {
    matchresults = matchedValues(flashedColor, userEnterdColours);
    if (matchresults) {
      score += 1;
      show = true;
      data =
        "Congratulations, You are promoted to next round of simon says game be proud";
    } else {
      show = true;
      data = "Oops seems like you lost , Let's starts from beginning";
    }
  };
  const resetGame = () => {
    if (matchresults) {
      round = round + 1;
      show = false;
      data = "";
      userEnterdColours = [];
      startGame();
    } else {
      round = 1;
      score = 0;
      show = false;
      data = "";
      userEnterdColours = [];
      flashedColor = [];
      startGame();
    }
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
  <ScoreBoard {score} {round} />
</main>
<WinModal {show} {data} on:reset={resetGame} />

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
