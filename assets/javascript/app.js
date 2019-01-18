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
    }, {
        question: "In 1986's 'Top Gun,' what was Val Kilmer's character's callsign?",
        answers: [ "Goose", "Flash", "Iceman", "Viper"],
        correctAnswer: "Iceman"
    }, {
        question: "In 1998's 'The Big Lebowski,' what character was the only one who cared about the rules?",
        answers: [ "Walter", "Dude", "Donnie", "Marty"],
        correctAnswer: "Walter"
    }, {
        question: "In 'The Matrix' (1999), which crew member of the Nebuchadnezzar betrays the other humans?",
        answers: [ "Tank", "Mouse", "Cypher", "Switch"],
        correctAnswer: "Cypher"
    }, {
        question: "What was the name of the athletic adversarial alien race in 'Space Jam?",
        answers: [ "Martians", "Morlocks", "Nerdlucks", "Noidrots"],
        correctAnswer: "Cypher"
    }, {
        question: "What is the air-speed velocity of an unladen swallow?",
        answers: [ "11 m/s", "21.3 knots", "African or European?", "Windspeed + 10%"],
        correctAnswer: "African or European?"
    }, {
        question: "Popular sitcom 'Saved by the Bell' was a spinoff of what failed television precusor?" ,
        answers: [ "Mr. Belding", "Good morning Miss Bliss", "Zack and Kelly", "Jess: Back in Town"],
        correctAnswer: "Good morning Miss Bliss"
    }, {
        question: "In 'Avengers: Infinity War,' who is the first superhero to die?" ,
        answers: [ "Winter Soldier", "Loki", "Star-Lord", "Black Panther"],
        correctAnswer: "Loki"
    }

];

var winReactionText = [
    "Oh yeah! You nailed that one.",
    "NICE! Correct answer!",
    "Dude, great job! That was right!",
    "Could you BE more correct? No.",
    "Heck yeah. You're clearly a man/woman of culture.",

];

var loseReactionText = [

];

var winReactionGIF = [
    "assets/gifs/right/bale.gif",
    "assets/gifs/right/barney.gif",
    "assets/gifs/right/batman.gif",
    "assets/gifs/right/kermit.gif",
    "assets/gifs/right/kirk.gif",
    "assets/gifs/right/levar.gif",
    "assets/gifs/right/office.gif",
    "assets/gifs/right/ranger.gif",
    "assets/gifs/right/snoop.gif",
    "assets/gifs/right/stefan.gif"
];

var loseReactionGIF = [
    "assets/gifs/wrong/chris.gif",
    "assets/gifs/wrong/claire.gif",
    "assets/gifs/wrong/dracula.gif",
    "assets/gifs/wrong/george.gif",
    "assets/gifs/wrong/napoleon.gif",
    "assets/gifs/wrong/samuel.gif",
    "assets/gifs/wrong/shooter.gif",
    "assets/gifs/wrong/sloth.gif",
    "assets/gifs/wrong/urkel.gif",
    "assets/gifs/wrong/will.gif"
];

const timerInitial = 10;

var playerWins = 0;
    
var timeRemaining = timerInitial;

var countingDown = false;

$("#time-left").html(timerInitial);

$("#popup-text").html("Welcome to my pop-culture themed trivia game! \
If you don't know what Festivus is, what Mr. Narwhal told Buddy before \
he left the North Pole, or what guitar Wayne from Wayne's World was obsessed \
with, you might be in the wrong place. But, if you're ready to test your \
knowledge of otherwise-useless cultural phenomena, then press confirm to begin!");

$("#popup-card").fadeIn(500);

    /* Random number generator to pull a question randomly from the array. */
function randomNum(x) {
    x = [Math.floor(Math.random() * (x - 0))];
    return x;
};

    /* Resets the timer to the initial value if countingDown becomes false. */
function countDown() {
    if (countingDown == true) {
        timeRemaining--;
    } else {
        timeRemaining = timerInitial;
    };
    $("#time-left").html(timeRemaining);
    outOfTime();
};

    /* Checks to see if the timer hits zero. If so, the clock stops and alerts the player they ran out of time.
    After clicking continue will call the getQuestion function to move on. */
function outOfTime() {
    if (timeRemaining === 0) {
        countingDown = false;
        clearInterval(countDown);
        $("#popup-card, #continue-button").fadeIn(400);
        $("#popup-text").html("Out of time! No points for this round. Press continue to move on.");
    };
};

    /* Selects the question using a random number, removes that question from the array, and adds the 
    question and its relevant answers to the html elements. */
function getQuestion() {
    var indexOfQuestion = randomNum(questionArray.length);
    questionCurrent = questionArray[indexOfQuestion];
    questionArray.splice(indexOfQuestion, 1);
    $("#trivia-question").html(questionCurrent.question);
    for(i = 1; i <= 4; i++) {
        $("#answer" + i).html(questionCurrent.answers[i - 1]);
      };
};


    /* Creates the list items in the answer list with ids 1-4 */
function getAnswers() {
    for(i = 1; i <= 4; i++) {
        $("#answer-list").append('<li id="answer'+ i +'" />');
    };
};


    /* Sets the win and lose conditions for the game. When the question array has run out, 
    the game is over and the score is displayed. 
    Otherwise, lets the player know if their answer was correct or not. */
function winOrLose() {
    $("li").click(function() {
        var submittedAnswer = $(this).text();
        if (submittedAnswer == questionCurrent.correctAnswer) {
            countingDown = false;
            rightAnswerDisplay();
            playerWins ++;
        } else {
            countingDown = false;
            wrongAnswerDisplay();
        };       
    }); 
};

    /* Displays random responses and gifs depending on whether the answer was right or wrong. */
function rightAnswerDisplay() {
    $("#popup-card, #continue-button").fadeIn(400);
    $("#popup-text").html("Your answer was correct!");
}
function wrongAnswerDisplay() {
    $("#popup-card, #continue-button").fadeIn(400);
    $("#popup-text").html("Bad luck! Your answer was super wrong.");
};

    /* Function that starts the game by calling relevant functions and beginning the countdown clock. */
function gameElements() {
    setInterval(countDown, 1000);
    getQuestion();
    getAnswers();
    outOfTime();
    winOrLose();
};

    /* Sets the conditions for the game ending. Gives the user feedback on their score and 
    offers them the chance to play again. */
function gameOver() {
    countingDown = false;
    $("#continue-button").hide();
    $("#popup-card, #reset-button").fadeIn(400);

    /* Make if statements that vary depending on the player's final score! */

    $("#popup-text").html("Congratulations! The game has concluded. Your score was " + playerWins + ".");
    $("#popup-text").append("<br>");
    $("#popup-text").append("Press the Reset button to re-load the page and play again!");
};

    /* Sets up the functions of the buttons. */
$("#confirm-button, #continue-button").click(function(){
    if (questionArray.length == 0) {
        gameOver();
    } else {
    getQuestion();
    $("#popup-card").fadeOut(200);
    $("#confirm-button, #continue-button").hide();
    countingDown = true;
    }
});

$("#reset-button").click(function(){
    location.reload();
});

    /* Begins the game. */
gameElements();

};