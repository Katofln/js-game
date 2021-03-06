// Game looper.
window.onload = function () {
  console.log("Game has successfully loaded.");

  // Code by Arthur Schreiber "Javascript Game Development - The Game Loop" - http://nokarma.org/2011/02/02/javascript-game-development-the-game-loop/index.html
  Game.run = (function() {
    var loops = 0, skipTicks = 1000 / Game.fps,
        maxFrameSkip = 10,
        nextGameTick = (new Date).getTime();

    return function() {
      loops = 0;

      while ((new Date).getTime() > nextGameTick) {
        Game.update();
        nextGameTick += skipTicks;
        loops++;
      }

      Game.render();
    };
  })();

  (function() {
    var onEachFrame;
    if (window.webkitRequestAnimationFrame) {
      onEachFrame = function(cb) {
        var _cb = function() { cb(); webkitRequestAnimationFrame(_cb); }
        _cb();
      };
    } else if (window.mozRequestAnimationFrame) {
      onEachFrame = function(cb) {
        var _cb = function() { cb(); mozRequestAnimationFrame(_cb); }
        _cb();
      };
    } else {
      onEachFrame = function(cb) {
        setInterval(cb, 1000 / 60);
      }
    }

    window.onEachFrame = onEachFrame;
  })();

  window.onEachFrame(Game.run);
  // End of code snippet.
}
