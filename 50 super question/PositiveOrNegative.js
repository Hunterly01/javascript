function CheckNumberPositiveNegative(){
const userInput = require("prompt-sync")();
let numberBox = userInput("Enter a number:");
if(numberBox > 0){
 	return "Positive";
} else {
	return "Negative";
}
}

let userInput = 3;
console.log(CheckNumberPositiveNegative());