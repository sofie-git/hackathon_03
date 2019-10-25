class Wall extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, `breakdownWall`);
    //

    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    this.setScale(1);
    //
    this.createAnimations();
  }
  createAnimations() {
    this.scene.anims.create({
      key: `breakWall`,
      frames: this.scene.anims.generateFrameNumbers(`breakdownWall`, {
        start: 1,
        end: 1
      }),
      frameRate: 10
    });
  }
}

module.exports = Wall;
