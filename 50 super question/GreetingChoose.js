function GreetChooser(){
const userInput = require("prompt-sync")();  

let name = userInput("What is your name: ");
	if(name == "Alex") {
return "Hello, friend!";
} else {
	return "Hi, stranger!";
}
}




 let userInput = "Alex";
console.log(GreetChooser(userInput))