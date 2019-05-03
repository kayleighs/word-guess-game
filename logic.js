var gameWords = ["michelangelo", "davinci", "boticelli", "donatello", "janvaneyck" , "bosch"];


// var randomWord = gameWords[ Math.floor(Math.random() * gameWords.length)];


function randomWord(gameWords) {
    return gameWords [Math.floor(Math.random()*gameWords.length)];
}