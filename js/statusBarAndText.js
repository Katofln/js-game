function drawPlayerStatus (player, drawSide) {  // Draw side takes "left" or "right", means which side/player status is drawn for.

}

function drawPlayerXWon (player) { // Takes input: "1" and "2".
  canvasContext.font = "37px " + Game.standardTextFont;
  canvasContext.textAlign = "center";
  canvasContext.fillStyle = Game.standardTextColor;
  canvasContext.fillText("Player " + player + " won round " + Game.rounds + "!", Game.width/2, Game.height/2);
}

function drawPlayersNeedToReadyUp () {
  canvasContext.font = "34px " + Game.standardTextFont;
  canvasContext.textAlign = "center";
  canvasContext.fillStyle = Game.standardTextColor;
  canvasContext.fillText("Hold attack/block key to accept ready check.", Game.width/2, Game.height/2);
}
