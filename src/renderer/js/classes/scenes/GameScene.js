import Bullet from "../gameobjects/Bullet";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: `game`
    });
    console.log(`GameScene`);
  }

  init() {
    this.gameOver = false;
    this.createBullet;
  }

  preload() {}
  create() {
    this.createBullet();
    this.createShip();
  }

  createShip() {
    this.add.sprite(400, 500, "ship").setDepth(1);
  }

  createBullet() {
    this.bullet = new Bullet(this, this.sys.game.config.width / 2, 250);
  }
  onHit() {
    this.gameOver = true;
  }
  update() {
    if (this.gameOver) {
      this.scene.start(`gameOver`);
    }
  }
}
