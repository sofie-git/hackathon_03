export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: `game`
    });
  }

  init() {
    this.gameOver = false;
  }

  preload() {}
  create() {}
  onHit() {
    this.gameOver = true;
  }
  update() {
    if (this.gameOver) {
      this.scene.start(`gameOver`);
    }
  }
}
