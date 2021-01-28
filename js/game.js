class game 
{
   constructor ()
   {

   } 

   getState ()
   {
       var gameRef = database.ref ('GameState');
       gameRef.on("value", function(data)
       {
           GameState = data.val();
       })
   } 
  
  update(state)
  {
     database.ref('/').update({GameState:state}) 
  }
   
  start ()
  {
      if (GameState === 0)
      {
          Player = new player();
          Player.getCount ();
          Form = new form();
          Form.display ();
      }
  } 

  play ()
  {
      Form.hideForm ();
      textSize (30);
      text ("Game Start!",100,120);
      player.getPlayerInfo ();
      var textYPosition = 160
      if (allPlayers!==undefined)
      {
          for (var plry in allPlayers)
          {
             if(plry === "Player" + Player.index)
              fill("red")
              else
              fill("black")

              textSize(15);
              text (allPlayers[plry].Name + " : " + allPlayers[plry].Distance,130,textYPosition);
              textYPosition += 20;
          }
      } 
      if (keyIsDown(UP_ARROW) && (Player.index!==null))
    { 
        Player.distance += 50;
        Player.update ();
    }

     


  }
}