function guessTheAnimal(){
let myAnimal = "dog";
const userInput = require("prompt-sync")();
let userGuess = userInput("guess an animal:");

if(userGuess == myAnimal){
	return  "Correct! it's a dog!"
} else { 
	return  "Nope, it's a dog!";
}

}




let userInput = "dog";
console.log(guessTheAnimal(userInput));