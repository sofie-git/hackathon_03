import PreloadScene from "./scenes/PreloadScene.js";
import BootScene from "./scenes/BootScene.js";
import GameScene from "./scenes/GameScene.js";
import EndScene from "./scenes/EndScene.js";
class Game extends Phaser.Game {
  constructor() {
    super({
      type: Phaser.AUTO,
      width: 800,
      height: 500,
      title: `TEST`,
      scene: [BootScene, PreloadScene, GameScene, EndScene],
      physics: {
        default: `arcade`,
        arcade: {
          gravity: { y: 500 },
          debug: true
        }
      }
    });
    console.log(`Constructor Game class`);
  }

  preload() {}
  create() {}
  update() {}
}
export default Game;
