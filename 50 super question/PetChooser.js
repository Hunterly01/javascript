function petChooser(){
const userInput = require("prompt-sync")();
let pet = userInput("what's your favorite pet:");
if(pet == "Dog"){
	return "Woof";
} else { 
	return "cool choice, but i love dogs"
}
}

let userInput = "Dog";
console.log(petChooser(userInput));

