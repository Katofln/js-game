Game.update = function () {
  if (!Game.paused) {
    updateKeyInput();

    // Check ready check.
    if ((!Game.running && !Game.winScreen) && (player1.shurikenKey && player2.shurikenKey)) {
      Game.initialize();
      Game.running = true;
    }

    // Check if one player has won.
    if (Game.running && (player1.isDead() || player2.isDead())) {
      // Set tick time for when win screen ends.
      Game.tickTimeToWinScreenEnd = Game.currentRenderTick + Game.tickTimeForWinScreen;

      if (player2.isDead() && !player1.isDead()) {
        Game.lastWinner = "1";
        player1.roundWon();
      } else if (player1.isDead() && !player2.isDead()) {
        Game.lastWinner = "2";
        player2.roundWon();
      }

      // Stop game and display win screen.
      Game.running = false;
      Game.winScreen = true;
      Game.rounds++;
    }

    // Check if not on win screen anymore.
    if (Game.currentRenderTick > Game.tickTimeToWinScreenEnd) {
      Game.winScreen = false;
    }

    // Execute if game is running.
    if (Game.running) {
      player1.update();
      player2.update();
      updateAllShurikens();
    }
  }
}
