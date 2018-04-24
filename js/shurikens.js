function updateShurikens (player, targetPlayer) {
  for (var i = 0; i < player.shurikensInAir.length; i++) {
    killThisShuriken = false;
    // Move and check if colliding with tilemap.
    var newX = player.shurikensInAir[i][1];
    // Left.
    if (player.shurikensInAir[i][0] == "left") {
      while (newX > (player.shurikensInAir[i][1] - player.shurikenVelocity)) {
        newX--;

        if (isObjectCollidingWithTilemapLeft(newX, player.shurikensInAir[i][2], Game.shurikenWidth, Game.shurikenHeight) || player.shurikensInAir[i][1].x <= 0) {
          killThisShuriken = true;
        }
      }
    // Right.
    } else if (player.shurikensInAir[i][0] == "right") {
      while (newX < (player.shurikensInAir[i][1] + player.shurikenVelocity)) {
        newX++;

        if (isObjectCollidingWithTilemapRight(newX, player.shurikensInAir[i][2], Game.shurikenWidth, Game.shurikenHeight) || this.x >= Game.width - Game.shurikenWidth) {
          killThisShuriken = true;
        }
      }
    }

    player.shurikensInAir[i][1] = newX;
    // Check if colliding with player.
    if (isObjectsColliding(player.shurikensInAir[i][1], player.shurikensInAir[i][2], Game.shurikenWidth, Game.shurikenHeight, targetPlayer.x, targetPlayer.y, targetPlayer.width, targetPlayer.height)) {
      targetPlayer.takeDamage(player.shurikenDamage);
      killThisShuriken = true;
    }
    if (killThisShuriken) {
      player.shurikensInAir.splice(i, 1);
    }
  }
}

function updateAllShurikens () {
  updateShurikens(player1, player2);
  updateShurikens(player2, player1);
}
