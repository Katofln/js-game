// Holds current value of what is pressed down.
var IsKeyDown = {
  // Player 1.
  aKey:false,
  dKey:false,
  wKey:false,
  cKey:false,   // Attack/block.
  vKey:false,   // Shuriken.
  // Player 2.
  leftKey:false,
  rightKey:false,
  upKey:false,
  dotKey:false,   // Attack/block.
  commaKey:false  // Shuriken.
};

// Called everytime key is pressed.
document.addEventListener('keydown', function(event) {
  // Switch statement to set keys pressed down.
  switch (event.keyCode) {
    case 37:
      IsKeyDown.leftKey = true;
      break;
    case 39:
      IsKeyDown.rightKey = true;
      break;
    case 38:
      IsKeyDown.upKey = true;
      break;
    case 190:
      IsKeyDown.dotKey = true;
      break;
    case 188:
      IsKeyDown.commaKey = true;
      break;
    case 65:
      IsKeyDown.aKey = true;
      break;
    case 68:
      IsKeyDown.dKey = true;
      break;
    case 87:
      IsKeyDown.wKey = true;
      break;
    case 67:
      IsKeyDown.cKey = true;
      break;
    case 86:
      IsKeyDown.vKey = true;
  }
});

// Called everytime key is released.
document.addEventListener('keyup', function(event) {
  switch (event.keyCode) {
    case 37:
      IsKeyDown.leftKey = false;
      break;
    case 39:
      IsKeyDown.rightKey = false;
      break;
    case 38:
      IsKeyDown.upKey = false;
      break;
    case 190:
      IsKeyDown.dotKey = false;
      break;
    case 188:
      IsKeyDown.commaKey = false;
      break;
    case 65:
      IsKeyDown.aKey = false;
      break;
    case 68:
      IsKeyDown.dKey = false;
      break;
    case 87:
      IsKeyDown.wKey = false;
      break;
    case 67:
      IsKeyDown.cKey = false;
      break;
    case 86:
      IsKeyDown.vKey = false;
  }
});
