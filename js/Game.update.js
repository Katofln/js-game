Game.update = function () {
  if (Game.running) {
    updateKeyInput();

    player1.update();
    player2.update();
  // If game is not running.
  } else {

  }
}
