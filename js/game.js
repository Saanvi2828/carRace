class Game {
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    } 
    start(){
       if (gameState===0) {
        player=new Player()
        player.getCount()
        form=new Form()
        form.display()
       }

       
    } 

    play(){
        form.hide()
        textSize(30)
        text("Start",120,120)
        Player.getplayerInfo()
        if (allPlayers!==undefined){
            for(var plr in allPlayers){
                if (plr==="player"+player.index){
                    fill("red")
                }
                else{fill("black")}
            }
        }
    }
}