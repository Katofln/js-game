Game.render = function () {
  // Clear canvas.
  canvasContext.fillStyle="#ffffff";
  canvasContext.fillRect(0, 0, Game.width, Game.height);
  // Apply background.
  canvasContext.globalAlpha = Tilemap.backgroundOpacity;
  canvasContext.drawImage(Tilemap.background, 0, 0);
  canvasContext.globalAlpha = 1;

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
          canvasContext.drawImage(brownTile, currentTileX, currentTileY);
          break;
        case 4:
          canvasContext.drawImage(brownGrassTile, currentTileX, currentTileY);
          break;
        case 5:
          canvasContext.drawImage(desertTile, currentTileX, currentTileY);
          break;
        case 6:
          canvasContext.drawImage(desertGrassTile, currentTileX, currentTileY);
          break;
        case 7:
          canvasContext.drawImage(woodenCreateTile, currentTileX, currentTileY);
          break;
        case 8:
          canvasContext.drawImage(brickTile, currentTileX, currentTileY);
          break;
        case 9:
          canvasContext.drawImage(brickV2Tile, currentTileX, currentTileY);
          break;
        case 10:
          canvasContext.drawImage(sandTile, currentTileX, currentTileY);
          break;
        case 11:
          canvasContext.drawImage(sandStoneTile, currentTileX, currentTileY);
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

  // Draw player status bar.
  drawPlayerStatus();

  // Draw players.
  // Player 1.
  canvasContext.save();
  if (player1.animationDirection == "left") {
    canvasContext.translate(player1.x + player1.width, player1.y);
    canvasContext.scale(-1, 1);
  } else if (player1.animationDirection == "right") {
    canvasContext.translate(player1.x, player1.y);
  }
  switch (player1.animationState) {
    case 0:
      canvasContext.drawImage(redNinjaIdle[player1.currentFrame], 0, 0);
      break;
    case 1:
      canvasContext.drawImage(redNinjaRunning[player1.currentFrame], 0, 0);
      break;
    case 2:
      canvasContext.drawImage(redNinjaInAir[player1.currentFrame], 0, 0);
      break;
    case 3:
      canvasContext.drawImage(redNinjaAttackingAndBlocking[player1.currentFrame], 0, 0);
      break;
    case 4:
      canvasContext.drawImage(redNinjaTakingDamage[player1.currentFrame], 0, 0);
      break;
  }
  canvasContext.restore();
  // Player 2.
  canvasContext.save();
  if (player2.animationDirection == "left") {
    canvasContext.translate(player2.x + player2.width, player2.y);
    canvasContext.scale(-1, 1);
  } else if (player2.animationDirection == "right") {
    canvasContext.translate(player2.x, player2.y);
  }
  switch (player2.animationState) {
    case 0:
      canvasContext.drawImage(blueNinjaIdle[player2.currentFrame], 0, 0);
      break;
    case 1:
      canvasContext.drawImage(blueNinjaRunning[player2.currentFrame], 0, 0);
      break;
    case 2:
      canvasContext.drawImage(blueNinjaInAir[player2.currentFrame], 0, 0);
      break;
    case 3:
      canvasContext.drawImage(blueNinjaAttackingAndBlocking[player2.currentFrame], 0, 0);
      break;
    case 4:
      canvasContext.drawImage(blueNinjaTakingDamage[player2.currentFrame], 0, 0);
      break;
  }
  canvasContext.restore();

  // Draw shruikens
  // Player 1
  for (var i = 0; i < player1.shurikensInAir.length; i++) {
    if (player1.shurikensInAir[i][0] == "left") {
      canvasContext.drawImage(shurikenMovingLeft[player1.shurikensInAir[i][3]], player1.shurikensInAir[i][1], player1.shurikensInAir[i][2]);
    } else {
      canvasContext.drawImage(shurikenMovingRight[player1.shurikensInAir[i][3]], player1.shurikensInAir[i][1], player1.shurikensInAir[i][2]);
    }
  }
  // Player 2
  for (var i = 0; i < player2.shurikensInAir.length; i++) {
    if (player2.shurikensInAir[i][0] == "left") {
      canvasContext.drawImage(shurikenMovingLeft[player2.shurikensInAir[i][3]], player2.shurikensInAir[i][1], player2.shurikensInAir[i][2]);
    } else {
      canvasContext.drawImage(shurikenMovingRight[player2.shurikensInAir[i][3]], player2.shurikensInAir[i][1], player2.shurikensInAir[i][2]);
    }
  }

  // Draw screen info.
  if (!Game.running && !Game.winScreen) {
    drawPlayersNeedToReadyUp();
  } else if (Game.winScreen) {
    drawPlayerXWon(Game.lastWinner);
  }

  // Draw game version on pause screen.
  if (Game.paused) {
    drawGameVersion();
  }

  // Increase the render tick number for time calculation.
  Game.currentRenderTick++;
}
