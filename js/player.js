// Player object constructor.
function Player (gravity, x, y, hp) {
  this.gravity = gravity;

  this.width = 120;
  this.height = 87;
  this.x = x;
  this.y = y;
  this.xVelocity = 0;
  this.yVelocity = 0;

  this.hp = hp;
  this.wins = 0;  // Rounds player have won.

  // Keys held down.
  this.moveLeftKey = false;
  this.moveRightKey = false;
  this.jumpKey = false;
  this.attackAndBlockKey = false;
  this.shurikenKey = false;

  this.timesJumped = 0;
  this.jumpKeyHaveBeenReleasedInAir = false; // While jumping check if jump key have been released while in air, this is for double jump to work properly.

  // Animations.
  // Animation states: 0-idle, 1-running, 2-in air, 3-attacking/blocking.
  this.animationState = 0;
  this.currentFrame = 0;
  // Frame counts.
  this.idleFrames = 4;
  this.runningFrames = 6;
  this.inAirFrames = 1;
  this.attackingAndBlockingFrames = 3;

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

  // Attack/block.
  this.attackAndBlock = function () {
    console.log("Player attacked/blocked");
  }

  // Called every update loop, checks input.
  this.handleInput = function () {

  }
}

// Declare the two players.
player1 = new Player(1, 50, 400, 100);
player2 = new Player(1, 300, 400, 100);
