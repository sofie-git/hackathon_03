import "./style.css";
import "phaser";
import Game from "./js/classes/Game.js";

{
  const init = () => {
    console.log(`GAME START`);

    new Game();
  };
  init();
}
