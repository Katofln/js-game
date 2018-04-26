function drawPlayerStatus () {
  var pixelsFromSides = 20;
  var pixelsFromTop = 25; // This is only for health bar and shurikens, not text.
  var textPixelsFromTop = 20;
  var pixelsFromHPBarToShurikens = 20;
  var pixelsBetweenShurikens = -6.5;
  var lengthOfHPBar = 100;
  var heightOfHPBar = 20;
  var HPColor = "#00ff00";
  var lostHPColor = "#ff0000";

  canvasContext.font = "15px " + Game.standardTextFont;
  canvasContext.textAlign = "center";

  function lengthOfHPBarBack (player) {
    var playerHP = player.hp;
    // Keep HP bar at max 100 and min 0.
    if (playerHP > 100) {
      playerHP = 100;
    } else if (playerHP < 0) {
      playerHP = 0;
    }
    return lengthOfHPBar / 100 * playerHP;
  }

  canvasContext.globalAlpha = Game.statusBarOpacity;

  // Player 1
  canvasContext.fillStyle = lostHPColor;
  canvasContext.fillRect(pixelsFromSides, pixelsFromTop, lengthOfHPBar, heightOfHPBar);

  canvasContext.fillStyle = HPColor;
  canvasContext.fillRect(pixelsFromSides, pixelsFromTop, lengthOfHPBarBack(player1), heightOfHPBar);

  canvasContext.fillStyle = Game.standardTextColor;
  canvasContext.fillText(player1.hp, pixelsFromSides + (lengthOfHPBar / 2), textPixelsFromTop);

  for (var i = 0; i < player1.shurikens; i++) {
    canvasContext.drawImage(redNinjaStatusBarShuriken[0], pixelsFromSides + i * (pixelsBetweenShurikens + Game.shurikenWidth), pixelsFromTop + pixelsFromHPBarToShurikens);
  }
  // Player 2
  canvasContext.fillStyle = lostHPColor;
  canvasContext.fillRect(Game.width - lengthOfHPBar - pixelsFromSides, pixelsFromTop, lengthOfHPBar, heightOfHPBar);

  canvasContext.fillStyle = HPColor;
  canvasContext.fillRect(Game.width - lengthOfHPBar - pixelsFromSides, pixelsFromTop, lengthOfHPBarBack(player2), heightOfHPBar);

  canvasContext.fillStyle = Game.standardTextColor;
  canvasContext.fillText(player2.hp, Game.width - (pixelsFromSides + (lengthOfHPBar / 2)), textPixelsFromTop);

  for (var i = 0; i < player2.shurikens; i++) {
    canvasContext.drawImage(blueNinjaStatusBarShuriken[0], Game.width - lengthOfHPBar - (pixelsFromSides - i * (pixelsBetweenShurikens + Game.shurikenWidth)), pixelsFromTop + pixelsFromHPBarToShurikens);
  }

  // Scoreboard.
  canvasContext.textAlign = "center";
  canvasContext.fillStyle = Game.standardTextColor;

  canvasContext.font = "35px " + Game.standardTextFont;
  canvasContext.fillText(Game.rounds, Game.width / 2, 35);

  canvasContext.font = "20px " + Game.standardTextFont;
  canvasContext.fillText("Red: " + player1.wins + "   -     " + "     -   Blue: " + player2.wins, Game.width / 2, 30);


  // Revert alpha.
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

  // Draw other things on screen.
  canvasContext.drawImage(JSNinjaLogo, Game.width/2 - 250, 150);
  canvasContext.font = "27px " + Game.standardTextFont;

  canvasContext.textAlign = "left";
  canvasContext.fillStyle = "#000000";
  canvasContext.fillText('Game by Frederik Stroem', 100, Game.height - 150);
  canvasContext.font = "14px " + Game.standardTextFont;
  canvasContext.fillText('@frederikstroem, @frederikhstroem & @katofln', 100, Game.height - 135);
  canvasContext.fillStyle = "#373737";
  canvasContext.font = "12px " + Game.standardTextFont;
  canvasContext.fillText('frederikstroem.com', 100, Game.height - 120);
  canvasContext.fillStyle = "#000000";
  canvasContext.font = "15px " + Game.standardTextFont;
  canvasContext.fillText(gameVersion, 2, Game.height - 2);

  // Third party credits.
  canvasContext.drawImage(thirdPartyCredits, Game.width - 300, Game.height - 300);
}
