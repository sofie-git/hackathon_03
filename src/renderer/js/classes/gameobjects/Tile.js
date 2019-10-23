export default class Tile extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, `tile`);
    //
    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    this.setScale(1);
    this.setBounce(4, Phaser.Math.FloatBetween(0, 0));
    this.setCollideWorldBounds(true);
    //
  }
}
