var database;
var Form, Game, Player;
var allPlayers;
var GameState = 0;
var PlayerCount = 0;

function setup()
{
    createCanvas(500,500);
    database = firebase.database();

    Game = new game ();
    Game.getState();
    Game.start();
   
    
}

function draw()
{
    background("white");

    if (PlayerCount === 4)
    {
        Game.update(1);
    } 
    if (GameState === 1)
    {
        clear ();
        Game.play();
    } 
  
    drawSprites();
}

