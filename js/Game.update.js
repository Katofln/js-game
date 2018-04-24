Game.update = function () {
  // Check if one player has won.
  // TODO

  // Check if not on win screen anymore.
  if (Game.currentRenderTick > Game.tickTimeToWinScreenEnd) {
    Game.winScreen = false;
  }

  if (Game.running && !Game.winScreen) {
    updateKeyInput();

    player1.update();
    player2.update();
    updateAllShurikens();
  }
}
