import Bullet from "../gameobjects/Bullet";
import Tile from "../gameobjects/Tile";
import Pointer from "../gameobjects/Pointer";

const bullets = [];

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
    this.createBackground();
    this.createBullet();
    this.createPointer();
    this.createMovements();
    this.createTile();
    //
    this.cursors = this.input.keyboard.createCursorKeys();
    //
    this.physics.add.collider(
      this.tiles,
      this.bullet,
      this.hitTile,
      null,
      this
    );
  }

  createBackground() {
    this.bg = this.add
      .image(
        this.sys.game.config.width / 2,
        this.sys.game.config.height / 2,
        `bg`
      )
      .setDepth(-1);

    this.bg.alpha = 0.94;
    //zorgen dat de achtergrond gescaled wordt naar de volledige breedte en hoogte
    // this.scaleX = this.cameras.main.width / this.img.width;
    // this.scaleY = this.cameras.main.height / this.img.height;
    // this.scale = Math.max(this.scaleX, this.scaleY);
    // this.img.setScale(this.scale).setScrollFactor(0);
  }

  createMovements() {
    this.input.on(
      "pointerdown",
      function(e) {
        this.game.input.mouse.requestPointerLock();
      },
      this
    );
    //
    this.input.on(
      "pointermove",
      function(e) {
        if (this.input.mouse.locked) {
          console.log(e.movementX);
          this.bullet.x += e.movementX;
          this.bullet.y += e.movementY;
        }
      },
      this
    );
    // Exit pointer lock when Q is pressed.
    this.input.keyboard.on(
      "keydown_Q",
      function(e) {
        if (this.game.input.mouse.locked) {
          this.game.input.mouse.releasePointerLock();
        }
      },
      0,
      this
    );
  }

  createPointer() {
    this.pointer = new Pointer(
      this,
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2
    ).setDepth(1);
    this.pointer.body.allowGravity = false;
  }

  createBullet() {
    this.bullet = new Bullet(
      this,
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2 + 100
    );
  }

  createTile() {
    this.tiles = [];
    // this.tilesHvlheid = 32;
    // for (let i = 0; i < this.tilesHvlheid; i++) {
    //   this.tile = new Tile(
    //     this,
    //     Phaser.Math.Between(100, 500),
    //     Phaser.Math.Between(400, 100)
    //   );
    //   this.tiles.push(this.tile);
    // }
    //Links
    this.tile01 = new Tile(this, 75, 315);
    this.tiles.push(this.tile01);
    this.tile02 = new Tile(this, 175, 315);
    this.tiles.push(this.tile02);
    this.tile03 = new Tile(this, 125, 345);
    this.tiles.push(this.tile03);
    //Rechts
    this.tile04 = new Tile(this, 792, 257);
    this.tiles.push(this.tile04);
    this.tile05 = new Tile(this, 892, 257);
    this.tiles.push(this.tile05);
    this.tile06 = new Tile(this, 842, 287);
    this.tiles.push(this.tile06);
    //
    this.tiles.forEach(tile => {
      tile.body.allowGravity = false;
      //
      this.physics.add.collider(tile, this.bullet);
      tile.setSize(80, 70, false);
    });
  }

  hitTile(tileSprite, tileImage) {
    tileSprite.anims.play(`break`);
    tileSprite.setSize(0.01, 0.01, false);
    tileSprite.once(Phaser.Animations.Events.SPRITE_ANIMATION_COMPLETE, () => {
      console.log("complete");
      tileSprite.disableBody(true, true);
    });
  }

  update() {
    if (this.gameOver) {
      this.scene.start(`gameOver`);
      this.game.input.mouse.releasePointerLock();
    }

    this.pointer.rotation = Phaser.Math.Angle.Between(
      this.pointer.x,
      this.pointer.y,
      this.bullet.x,
      this.bullet.y
    );

    if (this.cursors.up.isDown) {
      this.bullet.fire(400, 500);
    }
  }
}
