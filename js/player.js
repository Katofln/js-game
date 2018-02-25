// Player object constructor.
function Player (x, y) {
  // Position and size.
  this.width = 48;
  this.height = 64;
  this.x = x;
  this.y = y;

  // Velocity.
  this.gravity = 1;
  this.xVelocity = 0;
  this.yVelocity = 0;
  this.maxVelocity = 100;
  this.moveVelocity= 10;
  this.jumpVelocity = 100;

  this.hp = 100;
  this.wins = 0;  // Rounds player have won.

  // Set how much damage attacks deal.
  this.shurikenDamage = 10;
  this.meleeDamage = 10;

  // Keys held down.
  this.moveLeftKey = false;
  this.moveRightKey = false;
  this.jumpKey = false;
  this.attackAndBlockKey = false;
  this.shurikenKey = false;

  // Double jump.
  this.timesJumped = 0;
  this.jumpKeyHaveBeenReleasedInAir = false; // While jumping check if jump key have been released while in air, this is for double jump to work properly.

  // Animations.
  // Animation states: 0-idle, 1-running, 2-in air, 3-attacking/blocking.
  this.animationState = 0;
  this.currentFrame = 0;
  this.updateAnimationState = function (state) {
    // Update only animation state if it is not already that state.
    if (this.animationState != state) {
      this.animationState = state;
      // Start animation at first frame.
      this.currentFrame = 0;
    }
  }

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

  this.takeShurikenDamage = function (dmg) {
    this.hp -= dmg;
  }

  this.takeMeleeDamage = function (dmg) {
    this.hp -= dmg;
  }

  this.isPlayerDead = function () {
    if (this.hp <= 0) {
      return true;
    } else {
      return false;
    }
  }

  // Variable to not let movement update run more than once per frame.
  this.lastRenderTick = 0;

  // Called directly every update loop. Updates basicly everything in reletion to player.
  this.update = function () {
    // Allow movement only if render function gets called.
    if (Game.currentRenderTick > this.lastRenderTick) {
      // Apply gravity if player not standing on tile.
      if (isObjectCollidingWithTilemapDown(this.x, this.y, this.width, this.height) == false) {
        this.yVelocity -= this.gravity;
      } else if (isObjectCollidingWithTilemapDown(this.x, this.y, this.width, this.height) == true) {
        // If player standing on ground.
        this.yVelocity = 0;
      }

      if (this.jumpKey) {
        this.jump();
      }

      // Move player by y-axis, but only so that if a tile is in the way, it touches it, and does not go through it.
      // If player moving downwards.
      if (this.yVelocity < 0) {

      }

      // Update last render tick variable.
      this.lastRenderTick = Game.currentRenderTick;
    }
  }
}

// Declare the two players.
player1 = new Player(50, 768 - 64 - 32);
player2 = new Player(1024 - 48 - 50, 768 - 64 - 32);
