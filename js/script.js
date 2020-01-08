






$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

var player = "O"
var total = 0
var gameover = false

function performLogic(buttonId, tileId){
    if (!gameover){
        $(buttonId).hide();
        $(tileId).html(player);
        checkVertical();
        checkHorizontal();
        checkDiagonal();
        tiedGame();
        changePlayer();

    }
}
function changePlayer(){
    total = total + 1
    if(player == "O"){
        player = "X"
    }else(player == "X"){
        player = "O"
    }
}
function checkVertical(){

}
function checkHorizontal(){

}
function checkDiagonal(){

}
function tiedGame(){

}
function win(t1, t2, t3){
    if($(t1).html() == player && $(t2).html() == player && $(t3).html() == player){
        $("h1").text(player + "Wins!")
        gameOver = true 
    }
}