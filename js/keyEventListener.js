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

function updateInput() {
  // Player 1.
  if (IsKeyDown.aKey) {
    player1.moveLeftKey = true;
  } else {
    player1.moveLeftKey = false;
  }
  if (IsKeyDown.dKey) {
    player1.moveRightKey = true;
  } else {
    player1.moveRightKey = false;
  }
  if (IsKeyDown.wKey) {
    player1.jumpKey = true;
  } else {
    player1.jumpKey = false;
  }
  if (IsKeyDown.cKey) {
    player1.attackAndBlockKey = true;
  } else {
    player1.attackAndBlockKey = false;
  }
  if (IsKeyDown.vKey) {
    player1.shurikenKey = true;
  } else {
    player1.shurikenKey = false;
  }

  // Player 2
  if (IsKeyDown.leftKey) {
    player2.moveLeftKey = true;
  } else {
    player2.moveLeftKey = false;
  }
  if (IsKeyDown.rightKey) {
    player2.moveRightKey = true;
  } else {
    player2.moveRightKey = false;
  }
  if (IsKeyDown.upKey) {
    player2.jumpKey = true;
  } else {
    player2.jumpKey = false;
  }
  if (IsKeyDown.dotKey) {
    player2.attackAndBlockKey = true;
  } else {
    player2.attackAndBlockKey = false;
  }
  if (IsKeyDown.commaKey) {
    player2.shurikenKey = true;
  } else {
    player2.shurikenKey = false;
  }
}
