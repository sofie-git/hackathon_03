class PreloadScene extends Phaser.Scene {
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
    this.load.image(`baksteen`, `./static/assets/img/bak.jpg`);
    this.load.image(`bullet`, `./static/assets/img/bullet.png`);
    this.load.image(`hand`, `./static/assets/img/hand.png`);
    this.load.image(`bg`, `./static/assets/img/Hexagons-bg.png`);
    //
    //this.load.image(`lucht`, `./static/assets/img/lucht.png`);
    this.load.spritesheet("lucht", "./static/assets/img/lucht.png", {
      frameWidth: 60,
      frameHeight: 60
    });
    //this.load.image(`aarde`, `./static/assets/img/aarde.png`);
    this.load.spritesheet("aarde", "./static/assets/img/aarde.png", {
      frameWidth: 60,
      frameHeight: 60
    });
    // this.load.image(`vuur`, `./static/assets/img/vuur.png`);
    this.load.spritesheet("vuur", "./static/assets/img/vuur.png", {
      frameWidth: 60,
      frameHeight: 60
    });
    //this.load.image(`water`, `./static/assets/img/water.png`);
    this.load.spritesheet("water", "./static/assets/img/water.png", {
      frameWidth: 60,
      frameHeight: 60
    });
    //
    this.load.spritesheet("tile", "./static/assets/img/tile_spritesheet.png", {
      frameWidth: 80,
      frameHeight: 140
    });
    //
    this.load.spritesheet(
      "breakdownWall",
      "./static/assets/img/wall_sprite02.png",
      {
        frameWidth: 960,
        frameHeight: 270
      }
    );
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

module.exports = PreloadScene;
