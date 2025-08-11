function toPickFavoriteNumber(){
let favorite = 7;
const userInput = require("prompt-sync")();
let choice = userInput("guess a number:");
if(choice == favorite) {
	return "That's my favorite number";
} else {
	return "Nice try, guess again!";
}
}

let userInput = 7;
console.log(toPickFavoriteNumber(userInput));

