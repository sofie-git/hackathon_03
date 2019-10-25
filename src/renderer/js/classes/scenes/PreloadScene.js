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
    //
    this.load.image(`baksteen`, `./assets/img/bak.jpg`);
    this.load.image(`bullet`, `./assets/img/bullet.png`);
    this.load.image(`ship`, `./assets/img/ship.png`);
    this.load.image(`bg`, `./assets/img/Hexagons-bg.png`);
    //
    //this.load.image(`lucht`, `./assets/img/lucht.png`);
    this.load.spritesheet("lucht", "./assets/img/lucht.png", {
      frameWidth: 50,
      frameHeight: 34
    });
    //this.load.image(`aarde`, `./assets/img/aarde.png`);
    this.load.spritesheet("aarde", "./assets/img/aarde.png", {
      frameWidth: 36,
      frameHeight: 32
    });
    // this.load.image(`vuur`, `./assets/img/vuur.png`);
    this.load.spritesheet("vuur", "./assets/img/vuur.png", {
      frameWidth: 28,
      frameHeight: 48
    });
    //this.load.image(`water`, `./assets/img/water.png`);
    this.load.spritesheet("water", "./assets/img/water.png", {
      frameWidth: 31,
      frameHeight: 43
    });
    //
    this.load.spritesheet("tile", "./assets/img/tile_spritesheet.png", {
      frameWidth: 80,
      frameHeight: 140
    });
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
