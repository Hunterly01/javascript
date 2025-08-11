function CheckMagicNumber(){
let magicNumber = 42;
const userInput = require("prompt-sync")();
let userPick = userInput("Enter your age:");

if(userPick == magicNumber){
	return  "You found the magic number!"
} else { 
	return  "Keep looking!";
}

}




let userInput = 42;
console.log(CheckMagicNumber(userInput));