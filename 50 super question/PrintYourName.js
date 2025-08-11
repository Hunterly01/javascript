function PrintName(){
const userInput = require("prompt-sync")();
let name = userInput("Enter your name:");

for(let count = 1; count <= 3; count++){
console.log(name);
}
}





let userInput = "hunter";
console.log(PrintName(userInput));

	
