/* Javascript file for Tricky Trivia Game */

window.onload = function() {

const timerTotal = 10;
    
var timeRemaining = timerTotal;

var countingDown = false;

$("#time-left").html(timerTotal);

$("#popup-text").html("Welcome to my pop-culture themed trivia game! If you don't know what Festivus is, what Mr. Narwhal told Buddy before he left the North Pole, or what guitar Wayne from Wayne's World was obsessed with, you might be in the wrong place. But, if you're ready to test your knowledge of otherwise-useless cultural phenomena, then press confirm to begin!");

$("#popup-card").fadeIn(500);

function countDown() {
    if (countingDown == true) {
        timeRemaining--;
        console.log(timeRemaining)
    } else {
        timeRemaining = timerTotal;
    }
    $("#time-left").html(timeRemaining);
    outOfTime();
}

function outOfTime() {
    if (timeRemaining === 0) {
        console.log("ZERO");
        countingDown = false;
        clearInterval(countDown);
        $("#popup-card, #continue-button").fadeIn(400);
        $("#popup-text").html("Out of time! No points for this round. Press continue to move on.");
    } 
}

function gameElements() {
    setInterval(countDown, 1000);

    outOfTime();
}

$("#confirm-button, #continue-button").click(function(){
    $("#popup-card").fadeOut(200);
    $("#confirm-button, #continue-button").hide();
    countingDown = true;
});

gameElements();

}

