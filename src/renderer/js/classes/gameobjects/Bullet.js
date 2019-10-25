class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, [`aarde`, `water`, `vuur`, `lucht`]);
    //
    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    this.setScale(1.5);
    //
    this.speed = 1;
    this.born = 0;
    this.direction = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    //
    this.createChoice();
  }

  createChoice() {
    this.scene.anims.create({
      key: "aarde",
      frames: this.scene.anims.generateFrameNumbers(`aarde`, {
        start: 0,
        end: 40
      }),
      frameRate: 10
    });

    this.scene.anims.create({
      key: "water",
      frames: this.scene.anims.generateFrameNumbers(`water`, {
        start: 0,
        end: 40
      }),
      frameRate: 10
    });

    this.scene.anims.create({
      key: "vuur",
      frames: this.scene.anims.generateFrameNumbers(`vuur`, {
        start: 0,
        end: 40
      }),
      frameRate: 10
    });

    this.scene.anims.create({
      key: "lucht",
      frames: this.scene.anims.generateFrameNumbers(`lucht`, {
        start: 0,
        end: 40
      }),
      frameRate: 10
    });
  }

  fire(shooter, target) {
    this.setPosition(shooter.x, shooter.y); // init positie
    this.direction = Math.atan((target.x - this.x) / (target.y - this.y));

    // x en y berekenen van shooter naar taget
    if (target.y >= this.y) {
      this.xSpeed = this.speed * Math.sin(this.direction);
      this.ySpeed = this.speed * Math.cos(this.direction);
    } else {
      this.xSpeed = -this.speed * Math.sin(this.direction);
      this.ySpeed = -this.speed * Math.cos(this.direction);
    }

    this.rotation = shooter.rotation; // bullet image roteren op zelfde angle als shooter
    this.born = 0; // tijd sinds eerste bullet is afgevuurd
  }

  //bullet updaten elke cycle
  update(time, delta) {
    this.x += this.xSpeed * delta;
    this.y += this.ySpeed * delta;
    this.born += delta;
  }
}

module.exports = Bullet;
