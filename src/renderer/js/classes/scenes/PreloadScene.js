export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: `preload`
    });
  }
  preload() {
    console.log(`PreloadScene`);

    this.preloader = this.add.graphics();
    // uit de les, nodig om gameScene op te starten
    this.load.on(`progress`, this.onProgress, this);
    this.load.on(`complete`, this.onComplete, this);
    this.load.image(`baksteen`, `././assets/img/bak.jpg`);
  }

  onProgress(value) {
    this.preloader.clear();
    this.preloader.fillStyle(0xff1493, 1);
    this.preloader.fillRect(
      0,
      this.game.config.height / 2,
      this.game.config.width * value,
      10
    );
  }

  onComplete() {
    this.preloader.destroy();
    this.scene.start(`game`);
  }

  create() {}
  update() {}
}