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
}
