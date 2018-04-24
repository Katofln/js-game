Game.update = function () {
  if (Game.running && !Game.winScreen) {
    updateKeyInput();

    player1.update();
    player2.update();
    updateAllShurikens();
  // If game is not running.
  } else {

  }
}
