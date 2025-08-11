function checkAgeRestriction(){
let minimumAge = 10;
const userInput = require("prompt-sync")();
let userAge = userInput("Enter your age:");

if(userAge >= minimumAge){
	return  "Welcome to the show!"
} else { 
	return  "Sorry, you’re too young!";
}

}




let userInput = 10;
console.log(checkAgeRestriction(userInput));