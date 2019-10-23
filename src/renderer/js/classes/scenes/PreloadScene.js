export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: `preload`
    });
  }
  preload() {
    console.log(`Game preload`);

    this.preloader = this.add.graphics();
    // uit de les, nodig om gameScene op te starten
  }

  create() {
    // this.scene.start(`menu`);
  }
  update() {}
}
