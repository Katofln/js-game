// Called every frame
function mainGameFunction() {
  update();
  render();
}

// Game looper.
window.onload = function () { // Run only when page has loaded.
  // Code by Arthur Schreiber "Javascript Game Development - The Game Loop" - http://nokarma.org/2011/02/02/javascript-game-development-the-game-loop/index.html
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
        setInterval(cb, 1000 / 30);
      }
    }

    window.onEachFrame = onEachFrame;
  })();

  window.onEachFrame(mainGameFunction());
  // Code end.
}
