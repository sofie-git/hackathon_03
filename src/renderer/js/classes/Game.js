import PreloadScene from "./scenes/PreloadScene.js";
class Game extends Phaser.Game {
  constructor() {
    super({
      type: Phaser.AUTO,
      width: 800,
      height: 500,
      title: `TEST`,
      scene: [PreloadScene],
      physics: {
        default: `arcade`,
        arcade: {
          gravity: { y: 500 },
          debug: false
        }
      }
    });
    console.log(`Constructor Game class`);
  }
}
export default Game;
