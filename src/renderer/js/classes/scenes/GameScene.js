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
      this.sys.game.config.width / 2 + 50,
      this.sys.game.config.height / 2 - 70
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
    //Links
    this.tile01 = new Tile(this, 307, 589, 0);
    this.tile02 = new Tile(this, 375, 550, 1);
    this.tile03 = new Tile(this, 375, 622, 2);

    this.tile04 = new Tile(this, 559, 665, 3);
    this.tile05 = new Tile(this, 624, 697, 4);
    this.tile06 = new Tile(this, 624, 777, 5);

    this.tile07 = new Tile(this, 745, 551, 6);

    this.tile08 = new Tile(this, 869, 697, 7);
    this.tile09 = new Tile(this, 869, 777, 8);
    this.tile10 = new Tile(this, 929, 737, 9);

    this.tile11 = new Tile(this, 992, 551, 10);
    this.tile12 = new Tile(this, 1054, 514, 11);

    this.tile13 = new Tile(this, 1180, 665, 12);
    this.tile14 = new Tile(this, 1240, 700, 13);

    this.tile15 = new Tile(this, 1366, 551, 14);
    this.tile16 = new Tile(this, 1428, 512, 15);
    this.tile17 = new Tile(this, 1489, 551, 16);

    this.tile18 = new Tile(this, 1549, 737, 17);

    //Rechts
    this.tile19 = new Tile(this, 2420, 517, 18);
    this.tile20 = new Tile(this, 2480, 551, 19);

    this.tile21 = new Tile(this, 2480, 772, 20);
    this.tile22 = new Tile(this, 2545, 735, 21);
    this.tile23 = new Tile(this, 2610, 772, 22);

    this.tile24 = new Tile(this, 2727, 551, 23);
    this.tile25 = new Tile(this, 2727, 627, 24);

    this.tile26 = new Tile(this, 2850, 700, 25);

    this.tile27 = new Tile(this, 3040, 520, 26);
    this.tile28 = new Tile(this, 3040, 590, 27);
    this.tile29 = new Tile(this, 3104, 554, 28);

    this.tile30 = new Tile(this, 3224, 700, 29);
    this.tile31 = new Tile(this, 3290, 663, 30);

    this.tile32 = new Tile(this, 3409, 520, 31);

    this.tile33 = new Tile(this, 3469, 700, 32);
    this.tile34 = new Tile(this, 3535, 732, 33);
    this.tile35 = new Tile(this, 3595, 700, 34);

    //toevoegen aan de array
    tiles.push(
      this.tile01,
      this.tile02,
      this.tile03,
      this.tile04,
      this.tile05,
      this.tile06,
      this.tile07,
      this.tile08,
      this.tile09,
      this.tile10,
      this.tile11,
      this.tile12,
      this.tile13,
      this.tile14,
      this.tile15,
      this.tile16,
      this.tile17,
      this.tile18,
      this.tile19,
      this.tile20,
      this.tile21,
      this.tile22,
      this.tile23,
      this.tile24,
      this.tile25,
      this.tile26,
      this.tile27,
      this.tile28,
      this.tile29,
      this.tile30,
      this.tile31,
      this.tile32,
      this.tile33,
      this.tile34,
      this.tile35
    );

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

  //zodat de richter niet buiten zijn box gaat
  pointerConstrains() {
    this.distX = this.bullet.x - this.pointer.x; // X distance between player & reticle
    this.distY = this.bullet.y - this.pointer.y; // Y distance between player & reticle

    // Ensures reticle cannot be moved offscreen (player follow)
    if (this.distX > 210) this.bullet.x = this.pointer.x + 200;
    else if (this.distX < -210) this.bullet.x = this.pointer.x - 170;

    if (this.distY > 210) this.bullet.y = this.pointer.y + 200;
    else if (this.distY < -210) this.bullet.y = this.pointer.y - 170;
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
