var settingsPanelCurrentlyDisplayed = false;

// Insert standard values.
// Player 1
document.getElementById("player1HP").placeholder = player1.hp;
document.getElementById("player1Gravity").placeholder = player1.gravity;
document.getElementById("player1MoveVelocity").placeholder = player1.moveVelocity;
document.getElementById("player1JumpVelocity").placeholder = player1.jumpVelocity;
document.getElementById("player1MaxJumpTimes").placeholder = player1.maxJumpTimes;
document.getElementById("player1ShurikenDamage").placeholder = player1.shurikenDamage;
document.getElementById("player1ShurikenVelocity").placeholder = player1.shurikenVelocity;
document.getElementById("player1MaxShurikens").placeholder = player1.maxShurikens;
document.getElementById("player1TimeBetweenShurikenThrows").placeholder = player1.tickTimeBetweenShurikenThrows;
document.getElementById("player1TimeBetweenNewShurikens").placeholder = player1.tickTimeBetweenNewShurikens;
// Player 2
document.getElementById("player2HP").placeholder = player2.hp;
document.getElementById("player2Gravity").placeholder = player2.gravity;
document.getElementById("player2MoveVelocity").placeholder = player2.moveVelocity;
document.getElementById("player2JumpVelocity").placeholder = player2.jumpVelocity;
document.getElementById("player2MaxJumpTimes").placeholder = player2.maxJumpTimes;
document.getElementById("player2ShurikenDamage").placeholder = player2.shurikenDamage;
document.getElementById("player2ShurikenVelocity").placeholder = player2.shurikenVelocity;
document.getElementById("player2MaxShurikens").placeholder = player2.maxShurikens;
document.getElementById("player2TimeBetweenShurikenThrows").placeholder = player2.tickTimeBetweenShurikenThrows;
document.getElementById("player2TimeBetweenNewShurikens").placeholder = player2.tickTimeBetweenNewShurikens;

function showSettingsPanel (bool) {  // true/false
  if (bool) {
    document.getElementById("settingsPanel").style.display = "block";
    settingsPanelCurrentlyDisplayed = true;
  } else {
    document.getElementById("settingsPanel").style.display = "none";
    settingsPanelCurrentlyDisplayed = false;
  }
}

document.addEventListener('keydown', function(event) {
  if (event.keyCode == 27) {
    if (settingsPanelCurrentlyDisplayed) {
      showSettingsPanel(false);
    } else {
      showSettingsPanel(true);
    }
  }
});

function saveSettingsPanel () {
  if (document.getElementById("player1HP").value) {
    player1.hp = document.getElementById("player1HP").value;
  }

  showSettingsPanel(false);
}

function clearSettingsPanel() {
  var elements = document.getElementsByTagName("input");
  for (var ii=0; ii < elements.length; ii++) {
    elements[ii].value = "";
  }
}
