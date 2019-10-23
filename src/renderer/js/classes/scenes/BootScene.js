import { inAppPurchase } from "electron";

// naar preloadscene
// illustratiefilmpje tonen

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: `boot`
    });
  }

  preload() {
    console.log(`BootScene`);
    // this.load.video("video", "video.mp4");
    // this.load.image(`baksteen`, `././assets/img/bak.jpg`);
  }
  create() {
    // this.add.video(5, 1, "video");
    // this.add.image("baksteen");
    this.time.delayedCall(4000, this.startGame, [], this);
    // var timer = scene.time.delayedCall(delay, callback, args, scope);
  }

  startGame() {
    this.scene.start(`preload`);
  }

  // onComplete(){
  //   this.
  // }

  update() {}
}
