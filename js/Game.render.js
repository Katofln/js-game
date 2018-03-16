Game.render = function () {
  // Clear canvas.
  canvasContext.drawImage(forrestBackground, 0, 0);

  // Draw tilemap.
  var currentRow = 1;
  var currentCol = 1;
  var currentTileX = 0;
  var currentTileY = 0;
  for (var i = 0; i < Tilemap.map.length; i++) {
    if (Tilemap.map[i] > 0) {
      switch (Tilemap.map[i]) {
        case 1:
          canvasContext.drawImage(groundTile, currentTileX, currentTileY);
          break;
        case 2:
          canvasContext.drawImage(grassTile, currentTileX, currentTileY);
          break;
        case 3:
          canvasContext.drawImage(grassTileLeftCorner, currentTileX, currentTileY);
          break;
        case 4:
          canvasContext.drawImage(grassTileRightCorner, currentTileX, currentTileY);
      }
    }

    if (currentCol != Tilemap.columns) {
      currentCol++;
      currentTileX += Tilemap.tileSize;
    } else {
      currentCol = 1;
      currentTileX = 0;
      currentTileY += Tilemap.tileSize;
      currentRow++;
    }
  }

  // Check if game is NOT running and NOT on win screen.
  if (!Game.running && !Game.winScreen) {
    // Print that players need to ready up.
    canvasContext.font = '30px Courier New';
    canvasContext.textAlign = 'center';
    canvasContext.fillStyle = Game.standardTextColor;
    canvasContext.fillText("Hold attack/block key to accept ready check.", Game.width/2, Game.height/2);
  }

  // Draw players.
  // Player 1.
  switch (player1.animationState) {
    case 0:
      canvasContext.drawImage(redNinjaIdle[player1.currentFrame], player1.x, player1.y);
      break;
    case 1:
      canvasContext.drawImage(redNinjaRunning[player1.currentFrame], player1.x, player1.y);
      break;
    case 2:
      canvasContext.drawImage(redNinjaInAir[player1.currentFrame], player1.x, player1.y);
      break;
    case 3:
      canvasContext.drawImage(redNinjaAttackingAndBlocking[player1.currentFrame], player1.x, player1.y);
      break;
  }
  // Player 2.
  switch (player2.animationState) {
    case 0:
      canvasContext.drawImage(blueNinjaIdle[player2.currentFrame], player2.x, player2.y);
      break;
    case 1:
      canvasContext.drawImage(blueNinjaRunning[player2.currentFrame], player2.x, player2.y);
      break;
    case 2:
      canvasContext.drawImage(blueNinjaInAir[player2.currentFrame], player2.x, player2.y);
      break;
    case 3:
      canvasContext.drawImage(blueNinjaAttackingAndBlocking[player2.currentFrame], player2.x, player2.y);
      break;
  }

  // Increase the render tick number for time calculation.
  Game.currentRenderTick++;
}
