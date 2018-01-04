// Game size.
width = 640;
height = 480;


function getNewFallVelocity (gravity, yVelocity) {
  return gravity + yVelocity;
}

function objectCollidingWithTilemap (x, y) {

}

// Get canvas context.
var canvas = document.getElementById("gameCanvas");
var canvasContext = canvas.getContext("2d");
