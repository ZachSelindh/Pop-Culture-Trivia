/* Javascript file for Tricky Trivia Game */

window.onload = function() {


    

var timeRemaining = 15;

var countingDown = false;

$("#time-left").html(timeRemaining);



function countDown() {
    if (countingDown) {
    timeRemaining--;
    $("#time-left").html(timeRemaining);
    }
}



setInterval(countDown, 1000);

}
