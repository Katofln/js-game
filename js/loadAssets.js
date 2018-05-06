// Get canvas context.
var canvas = document.getElementById("gameCanvas");
var canvasContext = canvas.getContext("2d");

// Load sprites.
//Tiles
var groundTile = new Image();
groundTile.src = 'assets/tiles/groundTile.png';
var grassTile = new Image();
grassTile.src = 'assets/tiles/grassTile.png';
var brownTile = new Image();
brownTile.src = 'assets/tiles/brownTile.png';
var brownGrassTile = new Image();
brownGrassTile.src = 'assets/tiles/brownGrassTile.png';

var desertTile = new Image();
desertTile.src = 'assets/tiles/desertTile.png';
var desertGrassTile = new Image();
desertGrassTile.src = 'assets/tiles/desertGrassTile.png';
var woodenCreateTile = new Image();
woodenCreateTile.src = 'assets/tiles/woodenCreateTile.png';
var brickTile = new Image();
brickTile.src = 'assets/tiles/brickTile.png';
var brickV2Tile = new Image();
brickV2Tile.src = 'assets/tiles/brickV2Tile.png';
var sandTile = new Image();
sandTile.src = 'assets/tiles/sandTile.png';
var sandStoneTile = new Image();
sandStoneTile.src = 'assets/tiles/sandStoneTile.png';

// Backgrounds
var forrestBackground = new Image();
forrestBackground.src = 'assets/backgrounds/forrestBackground.png';
var mountainForestBackground = new Image();
mountainForestBackground.src = 'assets/backgrounds/mountainForestBackground.png';
var mountainForestBackground2 = new Image();
mountainForestBackground2.src = 'assets/backgrounds/mountainForestBackground2.png';
var forestBackground2 = new Image();
forestBackground2.src = 'assets/backgrounds/forestBackground2.png';

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

// Load audio.
var damageTaken = new Audio('assets/audio/damageTaken.wav');
var jump1 = new Audio('assets/audio/jump1.wav');
var jump2 = new Audio('assets/audio/jump2.wav');
var shurikenThrow = new Audio('assets/audio/shurikenThrow.wav');

function standardSoundVolume () {
  damageTaken.volume = 0.50;
  jump1.volume = 1;
  jump2.volume = 1;
  shurikenThrow.volume = 0.50;
}
standardSoundVolume();

// Load music.
var soundtrack = new Audio('assets/audio/soundtrack.mp3');
soundtrack.volume = 0.75;
soundtrack.loop = true;
