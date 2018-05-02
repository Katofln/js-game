/*
  Collision detection.
*/
function isObjectCollidingWithTilemap (objectX, objectY, objectWidth, objectHeight) {
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

  return false;
}

function isObjectCollidingWithTilemapLeft (objectX, objectY, objectWidth, objectHeight) {
  var currentRow = 1;
  var currentCol = 1;
  var currentTileX = 0;
  var currentTileY = 0;
  for (var i = 0; i < Tilemap.map.length; i++) {
    if (Tilemap.map[i] > 0) {
      if (objectX <= currentTileX + Tilemap.tileSize &&
      objectX + objectWidth > currentTileX &&
      objectY < currentTileY + Tilemap.tileSize &&
      objectHeight + objectY > currentTileY) {
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

  return false;
}

function isObjectCollidingWithTilemapRight (objectX, objectY, objectWidth, objectHeight) {
  var currentRow = 1;
  var currentCol = 1;
  var currentTileX = 0;
  var currentTileY = 0;
  for (var i = 0; i < Tilemap.map.length; i++) {
    if (Tilemap.map[i] > 0) {
      if (objectX < currentTileX + Tilemap.tileSize &&
      objectX + objectWidth >= currentTileX &&
      objectY < currentTileY + Tilemap.tileSize &&
      objectHeight + objectY > currentTileY) {
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

  return false;
}

function isObjectCollidingWithTilemapUp (objectX, objectY, objectWidth, objectHeight) {
  var currentRow = 1;
  var currentCol = 1;
  var currentTileX = 0;
  var currentTileY = 0;
  for (var i = 0; i < Tilemap.map.length; i++) {
    if (Tilemap.map[i] > 0) {
      if ((objectX < currentTileX + Tilemap.tileSize &&
      objectX + objectWidth > currentTileX &&
      objectY < currentTileY + Tilemap.tileSize &&
      objectHeight + objectY > currentTileY) &&
      (objectY > currentTileY + (Tilemap.tileSize / 2))) {
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

  return false;
}

function isObjectCollidingWithTilemapDown (objectX, objectY, objectWidth, objectHeight) {
  var currentRow = 1;
  var currentCol = 1;
  var currentTileX = 0;
  var currentTileY = 0;
  for (var i = 0; i < Tilemap.map.length; i++) {
    if (Tilemap.map[i] > 0) {
      if ((objectX < currentTileX + Tilemap.tileSize &&
      objectX + objectWidth > currentTileX &&
      objectY <= currentTileY + Tilemap.tileSize &&
      objectHeight + objectY >= currentTileY) &&
      (objectY <= currentTileY - (Tilemap.tileSize / 2))) {
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

  return false;
}

function isObjectsColliding (obj1x, obj1y, obj1width, obj1height, obj2x, obj2y, obj2width, obj2height) {
  if (obj1x <= obj2x + obj2width &&
  obj1x + obj1width >= obj2x &&
  obj1y <= obj2y + obj2height &&
  obj1height + obj1y >= obj2y) {
    return true;
  } else {
    return false;
  }
}
/*
  End collision detection.
*/

/*
  Audio toggles.
*/

function toggleSound () {
  if (Game.soundOn) {
    damageTaken.volume = 0;
    jump1.volume = 0;
    jump2.volume = 0;
    shurikenThrow.volume = 0;
    Game.soundOn = false;
  } else {
    damageTaken.volume = 1;
    jump1.volume = 1;
    jump2.volume = 1;
    shurikenThrow.volume = 1;
    Game.soundOn = true;
  }
}

function toggleMusic () {
  // TODO
}

/*
  End audio toggles.
*/
