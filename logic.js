
// 1.0
var gameWords = ["michelangelo", "leonardodavinci", "boticelli", "donatello", "janvaneyck", "bosch","titan","giotto","hieronymusbosch","masacciocomm"];
//1.1
function randomWord(gameWords) {
    return gameWords[Math.floor(Math.random() * gameWords.length)];
}
//1.2
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

function isCorrectGuess(word, letters) {
    if (word.includes(letters))
        return true
    else
        return false
}
// 1.3
function getBlanks(word) {
    var puzzleState = []
    for (var i = 0; i < word.length; i++) {
        puzzleState.push("_");
    }
    return puzzleState;
};
//1.4
function fillBlanks(word, puzzleState, chosenLetter) {
    for (i = 0; i < word.length; i++) {
        if (word[i] == chosenLetter) {
            puzzleState[i] = word[i];
        }
    }
    return puzzleState;
}

//1.5
function setupRound (word) {
    var setRound = {
        word: word,
        guessesLeft: 9,
        wrongGuesses: [],
        puzzleState: getBlanks(word),

    }
    return setRound;
}
//1.6
function updateRound (setRound, chosenLetter )  {
    if(isCorrectGuess(setRound.word, chosenLetter) === true) {
        fillBlanks(setRound.word, setRound.puzzleState, chosenLetter)
    }
    else if (isCorrectGuess(setRound.word, chosenLetter) === false) {
        setRound.guessesLeft--;
        setRound.wrongGuesses.push(chosenLetter);
    }
    return setRound;
}
 //1.7
 function hasWon (puzzleState) {
     for (var i=0; i < puzzleState.length; i++) {
     if (puzzleState[i] === "_") {
         return false;
     }
 }  
    return true;
 }
//1.8
function hasLost (guessesLeft) {
    if  (guessesLeft ===0 ) {
        return true;
    }
    return false
}
//1.9

var winS = new Audio("./sounds/win2.mp3");

var loseS = new Audio("./sounds/lose2.mp3");

function isEndOfRound (setRound) {
    if (hasWon(setRound.puzzleState)){
        winS.play();
        return true;
    }
    if (setRound.guessesLeft === 0 ) {
        document.getElementById("progress-pic").src = "images/0.jpg"
        loseS.play();
        return true;
    }
    handPic()
    return false
}
//1.10
function setupGame (gameWords, wins, losses) {
    var game = {
        words:gameWords,
        wins: wins,
        losses: losses,
        round: setupRound(randomWord(gameWords)),
    }
    return game
}
//1.11
function startNewRound (game) {
    if(hasWon(game.round.puzzleState) === true) {
        game.wins +=1;
        alert ("Congratulations! You got it right! The word was "+ game.round.word);
    }
    else {
        alert("Sorry! You lost! The correct word was " + game.round.word + "!");
        game.losses += 1;
    }
    document.getElementById("progress-pic").src = "images/9.png"
    return game;
}

//1.12
var myGame = setupGame(gameWords, 0 , 0);

//Part 3
//key press

// document.getElementById("puzzle-state").innerHTML = myGame.round.puzzleState.join(" ");

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("puzzle-state").innerHTML = myGame.round.puzzleState.join(" ");
    document.getElementById("wrong-guesses").innerHTML = "";
    document.getElementById("guesses-left").innerHTML = "9";
    document.getElementById("win-counter").innerHTML = "0";
    document.getElementById("loss-counter").innerHTML = "0";
})

/* window.onload = function () {

    document.getElementById("puzzle-state").innerHTML = myGame.round.puzzleState.join(" ");

}; */
console.log(myGame)
/* what ()
function what() {
        document.getElementById("puzzle-state").innerHTML = myGame.round.puzzleState.join(" ");
};
 */
var chosenLetter;
document.onkeyup= function(event){
    chosenLetter = event.key.toLowerCase();
    console.log(chosenLetter);
    isCorrectGuess(myGame.round.word, chosenLetter);
    fillBlanks(myGame.round.word, myGame.round.puzzleState, chosenLetter);
    updateRound(myGame.round, chosenLetter);
    hasWon(myGame.round.puzzleState);
    hasLost(myGame.round.guessesLeft);
    document.getElementById("puzzle-state").innerHTML = myGame.round.puzzleState.join(" ");
    document.getElementById("wrong-guesses").innerHTML = myGame.round.wrongGuesses;
    document.getElementById("guesses-left").innerHTML = myGame.round.guessesLeft;
  
if (isEndOfRound(myGame.round)) {
    console.log("wait")
    setTimeout(wait, 50);
}
}
function wait() {
    myGame = startNewRound(myGame);
    myGame.round = setupRound(randomWord(gameWords))
    updatePage()
    console.log(myGame)
}
function updatePage () {
    document.getElementById("win-counter").innerHTML = myGame.wins;
    document.getElementById("loss-counter").innerHTML = myGame.losses;
    document.getElementById("puzzle-state").innerHTML = myGame.round.puzzleState.join(" ");
    document.getElementById("wrong-guesses").innerHTML = myGame.round.wrongGuesses;
    document.getElementById("guesses-left").innerHTML = myGame.round.guessesLeft;
}
 function handPic () {

    if (myGame.round.guessesLeft ===9) {
        document.getElementById("progress-pic").src = "images/9.png"
    }
     if (myGame.round.guessesLeft === 8) {
         document.getElementById("progress-pic").src = "images/8.png"
     }
     if (myGame.round.guessesLeft === 7) {
         document.getElementById("progress-pic").src = "images/7.png"
     }
     if (myGame.round.guessesLeft === 6) {
         document.getElementById("progress-pic").src = "images/6.png"
     }
     if (myGame.round.guessesLeft === 5) {
         document.getElementById("progress-pic").src = "images/5.png"
     }
     if (myGame.round.guessesLeft === 4) {
         document.getElementById("progress-pic").src = "images/4.png"
     }
     if (myGame.round.guessesLeft === 3) {
         document.getElementById("progress-pic").src = "images/3.png"
     }
     if (myGame.round.guessesLeft === 2) {
         document.getElementById("progress-pic").src = "images/2.png"
     }
     if (myGame.round.guessesLeft === 1) {
         document.getElementById("progress-pic").src = "images/1.png"
     }
     if (myGame.round.guessesLeft === 0) {
         document.getElementById("progress-pic").src = "images/0.jpg"
     }
} 
