import Bullet from "../gameobjects/Bullet";
import Tile from "../gameobjects/Tile";
import Pointer from "../gameobjects/Pointer";

const bullets = [];
const tiles = [];
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
    this.physics.add.collider(tiles, this.bullet, this.hitTile, null, this);
    // this.physics.add.collider(
    //   this.bullet,
    //   this.tiles,
    //   this.hitTile,
    //   null,
    //   this
    // );
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
    // this.scaleX = this.cameras.main.width / this.bg.width;
    // this.scaleY = this.cameras.main.height / this.bg.height;
    // this.scale = Math.max(this.scaleX, this.scaleY);
    // this.bg.setScale(this.scale).setScrollFactor(0);
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
          // console.log(e.movementX);
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
    this.physics.add.collider(this.bullet, this.tiles);
  }

  createTile() {
    // this.tiles = this.physics.add.staticGroup({});
    // //Links
    // this.tile01 = new Tile(this, 75, 315);
    // this.tile02 = new Tile(this, 175, 315);
    // this.tile03 = new Tile(this, 125, 345);
    // //Rechts
    // this.tile04 = new Tile(this, 792, 257);
    // this.tile05 = new Tile(this, 892, 257);
    // this.tile06 = new Tile(this, 842, 287);
    // // toevoegen aan static group
    // this.tiles.add(
    //   this.tile01,
    //   this.tile02,
    //   this.tile03,
    //   this.tile04,
    //   this.tile05,
    //   this.tile06
    // );

    // this.physics.add.collider(this.tiles, this.bullet);
    // this.tilesHvlheid = 35;
    // for (let i = 0; i < this.tilesHvlheid; i++) {
    //   this.tile = new Tile(
    //     this,
    //     Phaser.Math.Between(100, 500),
    //     Phaser.Math.Between(400, 100)
    //   );
    //   this.tiles.push(this.tile);
    // }
    //Links
    this.tile01 = new Tile(this, 75, 315, 0);
    tiles.push(this.tile01);
    this.tile02 = new Tile(this, 175, 315, 1);
    tiles.push(this.tile02);
    this.tile03 = new Tile(this, 125, 345, 2);
    tiles.push(this.tile03);
    //Rechts
    this.tile04 = new Tile(this, 792, 257, 3);
    tiles.push(this.tile04);
    this.tile05 = new Tile(this, 892, 257, 4);
    tiles.push(this.tile05);
    this.tile06 = new Tile(this, 842, 287, 5);
    tiles.push(this.tile06);
    //
    tiles.forEach(tile => {
      tile.body.allowGravity = false;
      //
      tile.setSize(80, 70, false);
      this.physics.add.collider(tile, this.bullet);
    });
  }

  hitTile(tileSprite, tileImage) {
    try {
      //vuile code van koen (try catch)
      tileSprite.anims.play(`break`);
      //
      tileSprite.setSize(0.01, 0.01, true);
      tileSprite.once(
        Phaser.Animations.Events.SPRITE_ANIMATION_COMPLETE,
        () => {
          console.log("complete");
          tileSprite.destroy();
          let teller = 0;
          tiles.forEach(tile => {
            console.log(tiles);
            if (tile.index === tileSprite.index) {
              tiles.splice(teller, 1);
            }
            teller++;
          });
        }
      );
    } catch (e) {
      console.log(e);
    }
  }

  pointerConstrains() {
    this.distX = this.bullet.x - this.pointer.x; // X distance between player & reticle
    this.distY = this.bullet.y - this.pointer.y; // Y distance between player & reticle

    // Ensures reticle cannot be moved offscreen (player follow)
    if (this.distX > 210) this.bullet.x = this.pointer.x + 200;
    else if (this.distX < -210) this.bullet.x = this.pointer.x - 200;

    if (this.distY > 210) this.bullet.y = this.pointer.y + 200;
    else if (this.distY < -210) this.bullet.y = this.pointer.y - 200;
  }

  update() {
    if (this.gameOver) {
      this.game.input.mouse.releasePointerLock();
      this.scene.start(`gameOver`);
    }

    if (tiles.length === 0) {
      this.gameOver = true;
    }

    this.pointer.rotation = Phaser.Math.Angle.Between(
      this.pointer.x,
      this.pointer.y,
      this.bullet.x,
      this.bullet.y
    );

    this.pointerConstrains();

    if (this.cursors.up.isDown) {
      this.bullet.fire(400, 500);
    }
  }
}
