Game.update = function () {
  // Check weather game is running.
  if (Game.running) {
    // Check player input.
    updateInput();
    // Call player update function.
    player1.update();
    player2.update();
  } else {  // If game is not running.

  }
}
