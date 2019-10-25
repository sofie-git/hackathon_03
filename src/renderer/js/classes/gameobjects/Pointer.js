class Pointer extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, `hand`);
    //
    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    this.setScale(2);
    //
  }
}

module.exports = Pointer;
