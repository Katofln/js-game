Game.update = function () {
  // Check weather game is running.
  if (Game.running) {
    // Check player input.
    updateInput();
    console.log(player1.shurikenKey);
    // Call key input handle function.
    player1.handleInput();
    player2.handleInput();
  } else {  // If game is not running.

  }
}
