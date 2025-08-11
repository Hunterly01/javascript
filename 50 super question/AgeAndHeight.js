const userInput = require("prompt-sync")();
let height = userInput("enter your height:");
let age = userInput("enter your age:");


if(age >= 12 || height >= 140){
console.log("Ride allowed!");
} else { 
	console.log("not allowed");
}