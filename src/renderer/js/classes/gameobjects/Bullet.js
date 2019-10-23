export default class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, `bullet`);
    //
    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    this.setScale(1);
    this.setBounce(4, Phaser.Math.FloatBetween(0, 0));
    //this.setCollideWorldBounds(true);
    //
  }

  create() {
    this.bullet = this.add.image(0, 0, `bullet`);
    const physicsImage = this.physics.add.image(
      this.imageBullet.x,
      this.imageBullet.y,
      "bullet"
    );
  }
}
