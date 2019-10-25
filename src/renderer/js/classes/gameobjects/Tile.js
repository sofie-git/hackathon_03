class Tile extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, id) {
    super(scene, x, y, `tile`);
    //

    this.index = id;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    this.setScale(1.2);
    this.setCollideWorldBounds(true);
    //
    this.createAnimations();
  }
  createAnimations() {
    this.scene.anims.create({
      key: `break`,
      frames: this.scene.anims.generateFrameNumbers(`tile`, {
        start: 2,
        end: 11
      }),
      frameRate: 10
    });
  }
}

module.exports = Tile;
