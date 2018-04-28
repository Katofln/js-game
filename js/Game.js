var Game = {
    fps:30,
    currentRenderTick:0,
    width:1024,
    height:768,
    running:false,
    winScreen:false,
    lastWinner:null,  //Takes "1" and "2" as input.
    rounds:0,
    tickTimeForWinScreen:30 * 3,
    tickTimeToWinScreenEnd:0,
    standardTextColor:"#121212",
    standardTextFont:"Arial",
    statusBarOpacity:0.75,

    player1StartX:50,
    player1StartY:672,
    player2StartX:926,
    player2StartY:672,
    player1StartAnimationDirection:"right",
    player2StartAnimationDirection:"left",

    shurikenWidth:25,
    shurikenHeight:25,
    shurikenHitboxToTilemapDecreaser:10 // To make shuriken hitbox smaller, but only to tilemaps.
};
