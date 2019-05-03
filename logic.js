// 1.0
var gameWords = ["michelangelo", "davinci", "boticelli", "donatello", "janvaneyck" , "bosch"];
//1.2
function randomWord(gameWords) {
    return gameWords [Math.floor(Math.random()*gameWords.length)];
}
//1.3
var keyStrokeOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

function isCorrectGuess  (randomWord , keyStrokeOptions) {
    if (randomWord.includes(keyStrokeOptions))
    return true
    if (randomWord.startsWith(keyStrokeOptions))
    return true
    if (randomWord.endsWith(keyStrokeOptions))
    return true
    else 
    return false

}

// 1.4
 function getBlanks (gameWords)