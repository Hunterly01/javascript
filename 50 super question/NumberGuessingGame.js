//function GuessNumberGame(){
let secret = 8;
const userInput = require("prompt-sync")();
let userGuess = userInput("enter a number:");
while(userGuess != 8){
userGuess = userInput("Try again:");
} 
if(userGuess == secret){
	console.log("Correct");
} else { 
	console.log("Try again!");
}



//let input = 8;
//console.log(GuessNumberGame(input));

