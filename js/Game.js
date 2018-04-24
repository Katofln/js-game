var Game = {
    fps:30,
    currentRenderTick:0,
    width:1024,
    height:768,
    running:true,
    winScreen:false,
    lastWinner:null,  //Takes "1" and "2" as input.
    tickTimeForWinScreen:30,
    tickTimeToWinScreenEnd:0,
    standardTextColor:"#414141",
    standardTextFont:"Courier New";
    statusBarOpacity:"0.25",

    player1StartX:50,
    player1StartY:672,
    player2StartX:926,
    player2StartY:672,
    player1StartAnimationDirection:"right",
    player2StartAnimationDirection:"left",

    shurikenWidth:25,
    shurikenHeight:25
};
