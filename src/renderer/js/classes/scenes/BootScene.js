// naar preloadscene
// illustratiefilmpje tonen

class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: `boot`
    });
  }

  preload() {
    //video
    this.load.video(
      "intro",
      "./static/assets/video/intro_hackathon.mp4",
      "loadeddata",
      true,
      true
    );

    //audio
    this.load.audio("intro_audio", "./static/assets/audio/intro_audio.mp3");
  }
  create() {
    ///
    this.add.video(1920, 540, "intro");
    this.audio = this.sound.add("intro_audio");
    this.audio.play();
    this.time.delayedCall(3000, this.startGame, [], this);
  }

  startGame() {
    this.scene.start(`game`);
  }

  update() {}
}

module.exports = BootScene;
