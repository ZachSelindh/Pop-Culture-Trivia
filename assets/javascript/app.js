/* Javascript file for Tricky Trivia Game */

window.onload = function() {

var questionArray = [
    {
        question: "What is the name of Phoebe's 'pet' rat from the show Friends?",
        answers: [ "Bob", "Frank", "Tommy", "Eddie"],
        correctAnswer: "Bob"
    }, {
        question: "In 'The X-Men,' what is Professor Xavier's first name?",
        answers: [ "Charles", "Niles", "French", "Rupert"],
        correctAnswer: "Charles"
    }, {
        question: "In 2008's 'Iron Man,' which actor portrayed character Obadiah Stane?",
        answers: [ "Paul Bettany", "Clark Gregg", "Jeff Bridges", "Shaun Toub"],
        correctAnswer: "Jeff Bridges"
    }, {
        question: "In his titular sitcom, what is Jerry Seinfeld's father's name?",
        answers: [ "Abraham", "Mortimer", "Herb", "Benjamin"],
        correctAnswer: "Mortimer"
    },/*  {
        question: "In his titular sitcom, what is Jerry Seinfeld's father's name?",
        answers: [ "Abraham", "Mortimer", "Herb", "Benjamin"],
        correctAnswer: "Mortimer"
    } */


]

const timerInitial = 10;

var playerWins = 0;

var playerLosses = 0;
    
var timeRemaining = timerInitial;

var countingDown = false;

$("#time-left").html(timerInitial);

$("#popup-text").html("Welcome to my pop-culture themed trivia game! If you don't know what Festivus is, what Mr. Narwhal told Buddy before he left the North Pole, or what guitar Wayne from Wayne's World was obsessed with, you might be in the wrong place. But, if you're ready to test your knowledge of otherwise-useless cultural phenomena, then press confirm to begin!");

$("#popup-card").fadeIn(500);

function countDown() {
    if (countingDown == true) {
        timeRemaining--;
    } else {
        timeRemaining = timerInitial;
    }
    $("#time-left").html(timeRemaining);
    outOfTime();
}

function outOfTime() {
    if (timeRemaining === 0) {
        countingDown = false;
        clearInterval(countDown);
        $("#popup-card, #continue-button").fadeIn(400);
        $("#popup-text").html("Out of time! No points for this round. Press continue to move on.");
        playerLosses++;
    } 
}

function getQuestion() {
    /* Get the question */
}

function gameElements() {
    setInterval(countDown, 1000);
    getQuestion();
    outOfTime();
}

$("#confirm-button, #continue-button").click(function(){
    $("#popup-card").fadeOut(200);
    $("#confirm-button, #continue-button").hide();
    countingDown = true;
});

gameElements();

}

