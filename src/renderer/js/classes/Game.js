const PreloadScene = require("./scenes/PreloadScene.js");
const BootScene = require("./scenes/BootScene.js");
const GameScene = require("./scenes/GameScene.js");
const EndScene = require("./scenes/EndScene.js");
class Game extends Phaser.Game {
  constructor() {
    super({
      type: Phaser.AUTO,
      width: 3840,
      height: 1080,
      title: `TEST`,
      scene: [BootScene, PreloadScene, GameScene, EndScene],
      physics: {
        default: `arcade`,
        arcade: {
          gravity: { y: 0 },
          debug: true
        }
      },
      audio: {
        disableWebAudio: true
      }
    });
    console.log(`Constructor Game class`);
  }

  preload() {}
  create() {}
  update() {}
}

module.exports = Game;
