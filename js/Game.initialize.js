Game.initialize = function () {
  console.log("Starting new game...");

  player1.reset;
  player2.reset;

  player1.x = Game.player1StartX;
  player1.y = Game.player1StartY;
  player2.x = Game.player2StartX;
  player2.y = Game.player2StartY;

  player1.animationDirection = Game.player1StartAnimationDirection;
  player2.animationDirection = Game.player2StartAnimationDirection;
}
