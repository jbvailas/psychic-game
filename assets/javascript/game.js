//Global Variables
//======================================================================================

//Arrays and Variables for holding data
var wordOptions = ["brown", "green", "blue", "indigo", "black", "white", "yellow", "orange", "purple", "teal", "red"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongLetters = [];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//Functions
//======================================================================================
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

//Reset
guessesLeft = 9;
wrongLetters = [];
blanksAndSuccesses = [];

//Populate blanks and successes with right number of blanks
for (var i=0; i<numBlanks; i++){
    blanksAndSuccesses.push("_");
}

//Change HTML to reflect round condition
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount;

//Testing
console.log(selectedWord);
console.log(lettersinWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);

}

function checkLetters(letter) {
    //Check

    var isLetterInWord = false;

    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    if(isLetterinWOrd){
    for (var i=0; i<numBlanks; i++) {
        if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] == letter;
            }
        }

    }

    else {
        wrongLetters.push(letter);
        numGuesses--
    }


    console.log(blanksAndSuccesses);


}



//Main Process
//=======================================================================================

startGame();

document.onkeyup = function(event) {
   var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
   checkLetters(letterGuessed);

   //Testing
   alert(letterGuessed);

}