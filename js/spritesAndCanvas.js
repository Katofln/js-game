// Get canvas context.
var canvas = document.getElementById("gameCanvas");
var canvasContext = canvas.getContext("2d");

// Add images.
//Tiles
var groundTile = new Image();
groundTile.src = 'assets/tiles/groundTile.png';
var grassTile = new Image();
grassTile.src = 'assets/tiles/grassTile.png';
var brownTile = new Image();
brownTile.src = 'assets/tiles/brownTile.png';
var brownGrassTile = new Image();
brownGrassTile.src = 'assets/tiles/brownGrassTile.png';

// Backgrounds
var forrestBackground = new Image();
forrestBackground.src = 'assets/backgrounds/forrestBackground.png';
var mountainForestBackground = new Image();
mountainForestBackground.src = 'assets/backgrounds/mountainForestBackground.png';

// Player 1
var redNinjaIdle = new Array();
for (var i = 0; i < 4; i++) {
  redNinjaIdle[i] = new Image();
  redNinjaIdle[i].src = 'assets/redNinja/idle/' + i + '.png';
}
var redNinjaRunning = new Array();
for (var i = 0; i < 6; i++) {
  redNinjaRunning[i] = new Image();
  redNinjaRunning[i].src = 'assets/redNinja/running/' + i + '.png';
}
var redNinjaInAir = new Array();
for (var i = 0; i < 1; i++) {
  redNinjaInAir[i] = new Image();
  redNinjaInAir[i].src = 'assets/redNinja/inAir/' + i + '.png';
}
var redNinjaAttackingAndBlocking = new Array();
for (var i = 0; i < 1; i++) {
  redNinjaAttackingAndBlocking[i] = new Image();
  redNinjaAttackingAndBlocking[i].src = 'assets/redNinja/attackingAndBlocking/' + i + '.png';
}
var redNinjaTakingDamage = new Array();
for (var i = 0; i < 1; i++) {
  redNinjaTakingDamage[i] = new Image();
  redNinjaTakingDamage[i].src = 'assets/redNinja/takingDamage/' + i + '.png';
}
var redNinjaStatusBarShuriken = new Array();
for (var i = 0; i < 1; i++) {
  redNinjaStatusBarShuriken[i] = new Image();
  redNinjaStatusBarShuriken[i].src = 'assets/redNinja/statusBarShuriken/' + i + '.png';
}

// Player 2
var blueNinjaIdle = new Array();
for (var i = 0; i < 4; i++) {
  blueNinjaIdle[i] = new Image();
  blueNinjaIdle[i].src = 'assets/blueNinja/idle/' + i + '.png';
}
var blueNinjaRunning = new Array();
for (var i = 0; i < 6; i++) {
  blueNinjaRunning[i] = new Image();
  blueNinjaRunning[i].src = 'assets/blueNinja/running/' + i + '.png';
}
var blueNinjaInAir = new Array();
for (var i = 0; i < 1; i++) {
  blueNinjaInAir[i] = new Image();
  blueNinjaInAir[i].src = 'assets/blueNinja/inAir/' + i + '.png';
}
var blueNinjaAttackingAndBlocking = new Array();
for (var i = 0; i < 1; i++) {
  blueNinjaAttackingAndBlocking[i] = new Image();
  blueNinjaAttackingAndBlocking[i].src = 'assets/blueNinja/attackingAndBlocking/' + i + '.png';
}
var blueNinjaTakingDamage = new Array();
for (var i = 0; i < 1; i++) {
  blueNinjaTakingDamage[i] = new Image();
  blueNinjaTakingDamage[i].src = 'assets/blueNinja/takingDamage/' + i + '.png';
}
var blueNinjaStatusBarShuriken = new Array();
for (var i = 0; i < 1; i++) {
  blueNinjaStatusBarShuriken[i] = new Image();
  blueNinjaStatusBarShuriken[i].src = 'assets/blueNinja/statusBarShuriken/' + i + '.png';
}

// Shruikens
var shurikenMovingLeft = new Array();
for (var i = 0; i < 5; i++) {
  shurikenMovingLeft[i] = new Image();
  shurikenMovingLeft[i].src = 'assets/shuriken/movingLeft/' + i + '.png';
}
var shurikenMovingRight = new Array();
for (var i = 0; i < 5; i++) {
  shurikenMovingRight[i] = new Image();
  shurikenMovingRight[i].src = 'assets/shuriken/movingRight/' + i + '.png';
}
// For ready check screen.
JSNinjaLogo = new Image();
JSNinjaLogo.src = 'assets/JSNinjaLogo.png';
thirdPartyCredits = new Image();
thirdPartyCredits.src = 'assets/thirdPartyCredits.png';
