//Global Variables//
//======================================================================================

//Arrays and Variables for holding data
var wordOptions = ["brown", "green", "blue", "indigo", "black", "white", "yellow", "orange", "purple", "teal", "red"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongLetters = [];

//Game Counters//
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//FUNCTIONS//
//======================================================================================
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

//Reset//
guessesLeft = 9;
wrongLetters = [];
blanksAndSuccesses = [];

//Testing
console.log(selectedWord);
console.log(lettersinWord);
console.log(numBlanks);

}