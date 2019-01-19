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
        correctAnswer: "Nerdlucks"
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

var winReactions = [
    {
        text: "Nice job! Patrick Bateman approves.",
        image: "assets/gifs/right/bale.gif"
    } , {
        text: "That answer was legen -wait for it!...",
        image: "assets/gifs/right/barney.gif",
    } , {
        text: "Holy successful trivia answer, Batman!",
        image: "assets/gifs/right/batman.gif",
    } , {
        text: "OMG girl that was totes the right answer! I'm literally dead.",
        image: "assets/gifs/right/conrad.gif",
    } ,{
        text: "I'mma let you finish, but that answer... was right.",
        image: "assets/gifs/right/kanye.gif",
    } , {
        text: "Well - done. The - Captain. Approves.",
        image: "assets/gifs/right/kirk.gif",
    } , {
        text: "YOU DID IT! That was correct!",
        image: "assets/gifs/right/office.gif",
    } , {
        text: "An explosive answer! GO GO!",
        image: "assets/gifs/right/ranger.gif",
    } , {
        text: "Time to pour yourself some gin and juice. You did good.",
        image: "assets/gifs/right/snoop.gif",
    } , {
        text: "That answer... was so hot right now.",
        image: "assets/gifs/right/stefan.gif",
    } 
];

var loseReactions = [
    {
        text: "Back in box. You were wrong.",
        image: "assets/gifs/wrong/shame.gif"
    } , {
        text: "Nice answer, wasteoid. By which, I mean, WRONG.",
        image: "assets/gifs/wrong/claire.gif",
    } , {
        text: "BLEUH! That answer was like my preferred lighting. Not very bright",
        image: "assets/gifs/wrong/dracula.gif",
    } , {
        text: "I don't need my glasses to see how wrong you are.",
        image: "assets/gifs/wrong/george.gif",
    } ,{
        text: "You mom goes to college. Maybe you should too.",
        image: "assets/gifs/wrong/napoleon.gif",
    } , {
        text: "Your superpower must be getting questions wrong.",
        image: "assets/gifs/wrong/samuel.gif",
    } , {
        text: "Looks like you missed your shot.",
        image: "assets/gifs/wrong/shooter.gif",
    } , {
        text: "Did I do that? No, it was you. Being WRONG.",
        image: "assets/gifs/wrong/urkel.gif",
    } , {
        text: "You could be the last person on earth and you'd still be wrong.",
        image: "assets/gifs/wrong/will.gif",
    } , {
        text: "In the depths of space, I've never seen an answer more inane.",
        image: "assets/gifs/wrong/zorg.gif"
    } 
];

var finishedReactions = {
    win: "assets/gifs/win/high-five.gif",
    good: "assets/gifs/win/zack.gif",
    okay: "assets/gifs/win/amused.gif",
    bad: "assets/gifs/win/krysten.gif",
    bunk: "assets/gifs/win/shake.gif",
    fail: "assets/gifs/win/tea.gif"
}

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
    var y = [Math.floor(Math.random() * (x - 0))];
    return y;
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
        clearAnswers();
        $("#reaction-img").attr("src", "");
        $("#popup-card, #continue-button").fadeIn(400);
        $("#popup-text").html("Out of time! No points for this round. <br>");
        $("#popup-text").append("The correct answer was '" + questionCurrent.correctAnswer + "' <br>");
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

    /* Clears answers so they cannot be double-clicked. */
function clearAnswers()  {
    for(i = 1; i <= 4; i++) {
        $("#answer" + i).empty();
      };
}

    /* Sets the win and lose conditions for the game. When the question array has run out, 
    the game is over and the score is displayed. 
    Otherwise, lets the player know if their answer was correct or not. */
function winOrLose() {
    $("li").click(function() {
        var submittedAnswer = $(this).text();
        clearAnswers();
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
    indexOfReaction = randomNum(winReactions.length);
    $("#popup-text").html(winReactions[indexOfReaction].text);
    $("#reaction-img").attr("src", winReactions[indexOfReaction].image);
    winReactions.splice(indexOfReaction, 1);
}
function wrongAnswerDisplay() {
    $("#popup-card, #continue-button").fadeIn(400);
    indexOfReaction = randomNum(loseReactions.length);
    $("#popup-text").html(loseReactions[indexOfReaction].text);
    $("#reaction-img").attr("src", loseReactions[indexOfReaction].image);
    $("#popup-text").append("<br> The correct answer was '" + questionCurrent.correctAnswer + "' <br>");
    loseReactions.splice(indexOfReaction, 1);
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
    $("#continue-button, #answer-list").hide();
    $("#popup-text").html("");
    $("#reaction-img").attr("src", "");
    $("#popup-card, #reset-button").fadeIn(400);

    /* Make if statements that vary depending on the player's final score! */

    if (playerWins === 10) {
        $("#popup-text").html("Congratulations! You got all 10 questions correct! <br>");
        $("#reaction-img").attr("src", finishedReactions.win);
    } else if (playerWins >= 7) {
        $("#popup-text").html("Congratulations! The game has concluded. Your score was " + playerWins + ". Not bad!<br>");
        $("#reaction-img").attr("src", finishedReactions.good);
    } else if (playerWins <= 6 && playerWins >= 5) {
        $("#popup-text").html("The game has concluded. Your score was " + playerWins + ". Not very good... <br>");
        $("#reaction-img").attr("src", finishedReactions.okay);
    } else if (playerWins < 5 && playerWins >= 3) {
        $("#reaction-img").attr("src", finishedReactions.bad);
        $("#popup-text").html("Game Over! Your score was " + playerWins + ". You need to watch more TV and movies. <br>");
    } else if (playerWins < 3 && playerWins >= 1) {
        $("#reaction-img").attr("src", finishedReactions.bunk);
        $("#popup-text").html("Game Over! Your score was " + playerWins + ". Truly disappointing. <br>");
    } else if (playerWins == 0) {
        $("#reaction-img").attr("src", finishedReactions.fail);
        $("#popup-text").html("Game Over! You didn't get a single question right. You need help. <br>");
    }
    $("#popup-text").append("Press the Reset button to re-load the page and play again!");
};

    /* Sets up the functions of the buttons. */
$("#confirm-button, #continue-button").click(function(){
    if (questionArray.length == 0) {
        gameOver();
    } else {
    getQuestion();
    $("#popup-card").fadeOut(200);
    $("#reaction-img").attr("src", "");
    $("#confirm-button, #continue-button").hide();
    countingDown = true;
    }
});

    /* Resets the page after the game is over. */
$("#reset-button").click(function(){
    location.reload();
});

    /* Begins the game. */
gameElements();

};