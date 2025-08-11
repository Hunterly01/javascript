function checkPassword(){
let password = "secret123"
const userInput = require("prompt-sync")();
let userPassword = userInput("enter a pasword:");
if(userInput == password){
	return "Access granted! Welcome!";
} else {
	return "Access denied";
}
}

let userInput = "secret123";
console.log(checkPassword());

