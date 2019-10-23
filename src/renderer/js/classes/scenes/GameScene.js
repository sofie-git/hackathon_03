import Bullet from "../gameobjects/Bullet";
import Tile from "../gameobjects/Tile";

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
    this.createTile();
  }

  createShip() {
    this.add.sprite(400, 500, "ship").setDepth(1);
  }

  createBullet() {
    this.bullet = new Bullet(this, this.sys.game.config.width / 2, 250);
  }

  createTile() {
    this.tiles = [];
    this.tilesHvlheid = 32;
    for (let i = 0; i < this.tilesHvlheid; i++) {
      this.tile = new Tile(
        this,
        Phaser.Math.Between(100, 500),
        Phaser.Math.Between(400, 100)
      );
      this.tiles.push(this.tile);
    }
    this.tiles.forEach(tile => {
      tile.body.allowGravity = false;
      //
      this.physics.add.collider(tile, this.bullet);
    });
  }
  //
  onHit() {
    this.gameOver = true;
  }
  //
  update() {
    if (this.gameOver) {
      this.scene.start(`gameOver`);
    }
  }
}
