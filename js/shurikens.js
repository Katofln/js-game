function updateShurikens (shurikens, targetPlayer) {
  for (var i = 0; i < shurikens.length; i++) {
    if (isObjectsColliding(shurikens[i][1], shurikens[i][2], Game.shurikenWidth, Game.shurikenHeight, targetPlayer.x, targetPlayer.y, targetPlayer.width, targetPlayer.height)) {
      console.log("Shuriken collision");
    }
  }
}

function updateAllShurikens () {
  updateShurikens(player1.shurikensInAir, player2);
  updateShurikens(player2.shurikensInAir, player1);
}
