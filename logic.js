// 1.0
var gameWords = ["michelangelo", "davinci", "boticelli", "donatello", "janvaneyck", "bosch"];
//1.1
function randomWord(gameWords) {
    return gameWords[Math.floor(Math.random() * gameWords.length)];
}
//1.2
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

function isCorrectGuess(word, letters) {
    if (word.includes(letters))
        return true
    if (word.startsWith(letters))
        return true
    if (word.endsWith(letters))
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

/* var chosenLetter = document.getElementById("chosenLetter");
document.onkeyup = function (event) {
     chosenLetter.textContent = event.key;
} */
/* var remainingLetters = word.length
function fillBlanks(word, puzzleState, chosenLetter) {

    if (isCorrectGuess(word, chosenLetter)){
    for (i = 0; i < word.length; i++) {
        if (word[i] === chosenLetter) {
            puzzleState[i]= chosenLetter;
            remainingLetters--;
        }
    }
    return puzzleState;
}

}
; */
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
    var round = {
        word: word,
        guessesLeft: 9,
        wrongGuesses: [],
        puzzleState: [],

    }
    return round;
}
//1.6
function updateRound (round, chosenLetter )  {
    if(isCorrectGuess(round.word, chosenLetter) === true) {
        fillBlanks(round.word, round.puzzleState, chosenLetter)
    }
     else {
        round.guessesLeft--;
        round.wrongGuesses.push(chosenLetter);
    }
    return round;
}
 //1.7
 function hasWon (puzzleState) {
     for (var i=0; i <puzzleState.length; i++) {
     if (puzzleState[i] === "_") {
         return false;
     }
 }  
    return true;
 }
