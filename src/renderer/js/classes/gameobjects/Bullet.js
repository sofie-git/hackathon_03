export default class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, `bullet`);
    //
    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    this.setScale(5);
    // this.setBounce(4, Phaser.Math.FloatBetween(0, 0));
    //this.setCollideWorldBounds(true);
    //
  }

  fire(x, y) {
    this.setPosition(x - 50, y);

    this.setActive(true);
    this.setVisible(true);
  }

  update(time, delta) {
    this.y -= this.speed * delta;

    if (this.y < -50) {
      this.setActive(false);
      this.setVisible(false);
    }
  }
}
