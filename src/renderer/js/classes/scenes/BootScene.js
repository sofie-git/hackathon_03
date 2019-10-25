// naar preloadscene
// illustratiefilmpje tonen

class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: `boot`
    });
  }
  create() {
    this.text = this.add.text(
      100,
      this.sys.game.config.height / 2,
      "- Water - Aarde - Vuur - Lucht -",
      {
        font: "30px",
        fill: "#FFFFFF"
      }
    );
    this.time.delayedCall(4000, this.startGame, [], this);
  }

  startGame() {
    this.scene.start(`preload`);
  }

  update() {}
}

module.exports = BootScene;
