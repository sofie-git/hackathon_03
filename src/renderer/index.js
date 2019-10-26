const Game = require("./js/classes/Game.js");
const osc = require("osc");

{
  const init = () => {
    console.log(`GAME START`);

    window.app = {};
    window.app.game = new Game();

    window.app.udpPort = new osc.UDPPort({
      localAddress: "0.0.0.0",
      localPort: 1234
    });

    window.app.udpPort.open();
  };
  init();
}
