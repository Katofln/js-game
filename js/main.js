// Game version.
gameVersion = "null";

function getGameVersion() {
  return gameVersion;
}

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
  for (var i = 0; i < Tilemap.map.length; i++) {
    // Check if tile is not air.
    if (Tilemap.map[i] > 0) {
      if (objectX <= currentTileX + Tilemap.tileSize &&  // Inspired by https://developer.mozilla.org/kab/docs/Games/Techniques/2D_collision_detection
      objectX + objectWidth >= currentTileX &&
      objectY <= currentTileY + Tilemap.tileSize &&
      objectHeight + objectY >= currentTileY) {
           return true;
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
  return false; // If not colliding, retun false.
}

function objectsColliding (obj1x, obj1y, obj1width, obj1height, obj2x, obj2y, obj2width, obj2height) {
  // Inspired by https://developer.mozilla.org/kab/docs/Games/Techniques/2D_collision_detection
  if (obj1x <= obj2x + obj2width &&
  obj1x + obj1width >= obj2x &&
  obj1y <= obj2y + obj2height &&
  obj1height + obj1y >= obj2y) {
    return true;
  } else {
    return false;
  }
}

// Get canvas context.
var canvas = document.getElementById("gameCanvas");
var canvasContext = canvas.getContext("2d");

// Add images.
//Tiles
var groundTile = new Image();
groundTile.src = 'assets/tiles/groundTile.png';
var grassTile = new Image();
grassTile.src = 'assets/tiles/grassTile.png';
var grassTileLeftCorner = new Image();
grassTileLeftCorner.src = 'assets/tiles/grassTileLeftCorner.png';
var grassTileRightCorner = new Image();
grassTileRightCorner.src = 'assets/tiles/grassTileRightCorner.png';

// Backgrounds
var forrestBackground = new Image();
forrestBackground.src = 'assets/backgrounds/forrestBackground.png';

// Player 1
var redNinjaIdle = new Array();
for (var i = 0; i < 1; i++) {
  redNinjaIdle[i] = new Image();
  redNinjaIdle[i].src = 'assets/redNinja/idle/' + i + '.png';
}
var redNinjaRunning = new Array();
for (var i = 0; i < 1; i++) {
  redNinjaRunning[i] = new Image();
  redNinjaRunning[i].src = 'assets/redNinja/running/' + i + '.png';
}
var redNinjaInAir = new Array();
for (var i = 0; i < 1; i++) {
  redNinjaInAir[i] = new Image();
  redNinjaInAir[i].src = 'assets/redNinja/inAir/' + i + '.png';
}
var redNinjaAttackingAndBlocking = new Array();
for (var i = 0; i < 1; i++) {
  redNinjaAttackingAndBlocking[i] = new Image();
  redNinjaAttackingAndBlocking[i].src = 'assets/redNinja/attackingAndBlocking/' + i + '.png';
}

// Player 2
var blueNinjaIdle = new Array();
for (var i = 0; i < 1; i++) {
  blueNinjaIdle[i] = new Image();
  blueNinjaIdle[i].src = 'assets/blueNinja/idle/' + i + '.png';
}
var blueNinjaRunning = new Array();
for (var i = 0; i < 1; i++) {
  blueNinjaRunning[i] = new Image();
  blueNinjaRunning[i].src = 'assets/blueNinja/running/' + i + '.png';
}
var blueNinjaInAir = new Array();
for (var i = 0; i < 1; i++) {
  blueNinjaInAir[i] = new Image();
  blueNinjaInAir[i].src = 'assets/blueNinja/inAir/' + i + '.png';
}
var blueNinjaAttackingAndBlocking = new Array();
for (var i = 0; i < 1; i++) {
  blueNinjaAttackingAndBlocking[i] = new Image();
  blueNinjaAttackingAndBlocking[i].src = 'assets/blueNinja/attackingAndBlocking/' + i + '.png';
}
