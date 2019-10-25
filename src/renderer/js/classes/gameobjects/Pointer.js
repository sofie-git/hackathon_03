class Pointer extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, `ship`);
    //
    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    this.setScale(1);
    //
  }
}

module.exports = Pointer;
