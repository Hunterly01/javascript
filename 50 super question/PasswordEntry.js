let correctPassword = "python";
let attempts = 0;
const userInput = require("prompt-sync")();
while(attempts < 3){
let userGuess = userInput("enter a password:");
if(userGuess == correctPassword){
	console.log("Success");
	break;
} else { 
	attempts++;
	console.log("Try agan!");	
}
}
if(attempts == 3){
	console.log("locked out");
}
