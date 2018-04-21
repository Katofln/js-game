function updateShurikens (player, targetPlayer) {
  for (var i = 0; i < player.shurikensInAir.length; i++) {
    // Move and check if colliding with tilemap.
    // Right
    /*if () {

    // Left
    } else if () {

    }*/
    // Check if colliding with player.
    if (isObjectsColliding(player.shurikensInAir[i][1], player.shurikensInAir[i][2], Game.shurikenWidth, Game.shurikenHeight, targetPlayer.x, targetPlayer.y, targetPlayer.width, targetPlayer.height)) {
      console.log("Shuriken collision");
    }
  }
}

function updateAllShurikens () {
  updateShurikens(player1, player2);
  updateShurikens(player2, player1);
}
