// Game version.
gameVersion = "null";

function getGameVersion() {
  return gameVersion;
}

// Game size.
width = 640;
height = 480;

function getNewFallVelocity (gravity, yVelocity) {
  return gravity + yVelocity;
}

// Return if an object is colliding with the tilemap.
function objectCollidingWithTilemap (objectX, objectY, objectWidth, objectHeight) {
  // TODO: Might be able to optimize this.
  // Loop though each tile to check if an object is coliding with the tilemap.
  var currentRow = 1;
  var currentCol = 1;
  var currentTileX = 0;
  var currentTileY = 0;
  for (var i = 0; i < tilemap.map.length; i++) {
    if (objectX < currentTileX + tilemap.tileSize &&  // Inspired by https://developer.mozilla.org/kab/docs/Games/Techniques/2D_collision_detection
         objectX + objectWidth > currentTileX &&
         objectY < currentTileY + tilemap.tileSize &&
         objectHeight + objectY > currentTileY
       ) {
         // Check if tile is not air.
         if (tilemap.map[i] > 0) {
           return true;
         }
    } else {
      if (currentCol != tilemap.columns) {
        currentCol++;
        currentTileX += tilemap.tileSize;
      } else {
        currentCol = 1;
        currentTileX = 0;
        currentTileY += tilemap.tileSize;
        currentRow++;
      }
    }
  }
  return false; // If not coliding, retun false.
}

// Get canvas context.
var canvas = document.getElementById("gameCanvas");
var canvasContext = canvas.getContext("2d");
