Game.update = function () {
  if (Game.running) {
    updateKeyInput();

    player1.update();
    player2.update();
    updateAllShurikens();
  // If game is not running.
  } else {

  }
}
