const Wall = require("../gameobjects/Wall.js");
class EndScene extends Phaser.Scene {
  constructor() {
    super({
      key: `gameOver`
    });
  }
  preload() {
    this.load.video(
      "outro",
      "./static/assets/video/outro_hackathon.mp4",
      "loadeddata",
      true,
      true
    );
    //
  }
  create() {
    console.log("endscene");
    this.add.video(1920, 540, "outro");
    this.audio = this.sound.add("outro_audio");
    this.audio.play();
    // this.time.delayedCall(13000, this.restartGame, [], this);
  }

  // restartGame() {
  //   this.scene.start(`boot`);
  // }
  update() {}
}

module.exports = EndScene;
