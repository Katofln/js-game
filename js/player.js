// Player object constructor.
function Player (gravity, x, y, hp) {
  this.gravity = gravity;

  this.x = x;
  this.y = y;
  this.xVelocity = 0;
  this.yVelocity = 0;

  this.hp = hp;

  this.timesJumped = 0;
  this.jumpKeyHaveBeenReleasedInAir = false; // While jumping check if jump key have been released while in air, this is for double jump to work properly.

  // Jump function.
  this.jump = function () {
    console.log("Player jumped.");
  }

  // Move left.
  this.moveLeft = function () {

  }

  // Move right.
  this.moveRight = function () {

  }
}

// Declare the two players.
var player1 = null;
var player2 = null;
