function drawPlayerStatus (player, drawSide) {  // Draw side takes "left" or "right", means which side/player status is drawn for.

}

function drawPlayerXWon (player) { // Takes input: "1" and "2".
  var playerWonColor = null;
  var winColor = null;
  if (player == 1) {
    playerWonColor = "Red";
    winColor = "#cd0000";
  } else if (player == 2) {
    playerWonColor = "Blue";
    winColor = "#0000cd";
  }

  canvasContext.font = "90px " + Game.standardTextFont;
  canvasContext.textAlign = "center";
  canvasContext.fillStyle = winColor;
  canvasContext.fillText(playerWonColor + " Wins!", Game.width/2, Game.height/2);
}

function drawPlayersNeedToReadyUp () {
  canvasContext.font = "34px " + Game.standardTextFont;
  canvasContext.textAlign = "center";
  canvasContext.fillStyle = Game.standardTextColor;
  // Hightligt text if one player is ready.
  if (player1.shurikenKey) {
    canvasContext.fillStyle = "#cd0000";
  } else if (player2.shurikenKey) {
    canvasContext.fillStyle = "#0000cd";
  }

  canvasContext.fillText('Hold shuriken key to accept ready check', Game.width/2, Game.height/2);

  // Draw which keys to hold down.
  canvasContext.font = "20px " + Game.standardTextFont;
  canvasContext.fillStyle = Game.standardTextColor;
  canvasContext.fillText('Keys: v + .', Game.width/2, Game.height/2 + 30);
}
