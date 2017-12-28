// Player object constructor.
function Player(gravity, x, y, hp) {
  this.gravity = gravity;

  this.x = x;
  this.y = y;
  this.xVelocity = 0;
  this.yVelocity = 0;

  this.hp = hp;

  this.timesJumped = 0;

  this.jump = function() {
    // TODO
  }
}
