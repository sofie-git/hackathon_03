const Wall = require("../gameobjects/Wall.js");
class EndScene extends Phaser.Scene {
  constructor() {
    super({
      key: `gameOver`
    });
  }
  preload() {
    //
  }
  create() {
    console.log("endscene");
  }
  update() {}
}

module.exports = EndScene;
