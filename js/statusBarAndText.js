function drawPlayerStatus () {
  var pixelsFromSides = "20";
  var pixelsFromTop = "25";
  var pixelsFromHPBarToShurikens = "20";
  var lengthOfHPBar = "100";
  var heightOfHPBar = "20";
  var HPColor = "#00ff00";
  var lostHPColor = "#ff0000";

  function lengthOfHPBarBack (player) {
    var playerHP = player.hp;
    // Keep HP bar at max 100.
    if (playerHP > 100) {
      playerHP = 100;
    }
    return lengthOfHPBar / 100 * playerHP;
  }

  canvasContext.globalAlpha = Game.statusBarOpacity;

  // Player 1
  canvasContext.fillStyle = lostHPColor;
  canvasContext.fillRect(pixelsFromSides, pixelsFromTop, lengthOfHPBar, heightOfHPBar);

  canvasContext.fillStyle = HPColor;
  canvasContext.fillRect(pixelsFromSides, pixelsFromTop, lengthOfHPBarBack(player1), heightOfHPBar);

  // Player 2
  canvasContext.fillStyle = lostHPColor;
  canvasContext.fillRect(Game.width - lengthOfHPBar - pixelsFromSides, pixelsFromTop, lengthOfHPBar, heightOfHPBar);

  canvasContext.fillStyle = HPColor;
  canvasContext.fillRect(Game.width - lengthOfHPBar - pixelsFromSides, pixelsFromTop, lengthOfHPBarBack(player2), heightOfHPBar);

  canvasContext.globalAlpha = 1;
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
