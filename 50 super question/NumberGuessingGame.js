function GuessNumberGame(){
let secret = 8;
const userInput = require("prompt-sync")();
 while(userInput != 8){
let userGuess = userInput("Guess a number:");
 if(userGuess == secret){
	return "Correct";
} else { 
	return "Try again!";
}
}
}



let input = 8;
console.log(GuessNumberGame(input));

