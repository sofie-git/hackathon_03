class Wall extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, `breakdownWall`);
    //

    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    this.setScale(4);
    //
    this.createAnimations();
  }
  createAnimations() {
    this.scene.anims.create({
      key: `breakWall`,
      frames: this.scene.anims.generateFrameNumbers(`breakdownWall`, {
        start: 0,
        end: 14
      }),
      repeat: 1,
      frameRate: 5
    });
  }
}

module.exports = Wall;
