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
    //
    console.log("In the game over scene!");
    this.wall = new Wall(
      this,
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2
    );
  }
  update() {
    this.wall.anims.play(`breakWall`, true);
  }
}

module.exports = EndScene;
