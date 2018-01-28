Game.update = function () {
  // Check weather game is running.
  if (Game.running) {
    // Check player input.
    updateInput();
    // Call key input handle function.
    player1.handleInput();
    player2.handleInput();
  } else {  // If game is not running.

  }
}
