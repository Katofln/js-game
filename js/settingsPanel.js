var settingsPanelCurrentlyDisplayed = false;

// Insert standard values.
// TODO

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
  if (event.keyCode == 48) {
    if (settingsPanelCurrentlyDisplayed) {
      showSettingsPanel(false);
    } else {
      showSettingsPanel(true);
    }
  }
});

function saveSettingsPanel () {
  // TODO

  showSettingsPanel(false);
}
