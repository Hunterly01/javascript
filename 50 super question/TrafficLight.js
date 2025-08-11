function trafficLight(){
const userInput = require("prompt-sync")();
let lightBox = userInput("Enter a color Yellow, Green or Red:");
if(lightBox == "Green"){
	return  "Go!"
}  
if(lightBox == "Yellow"){
	return  "wait!"
}  

if(lightBox == "Red"){
	return  "Stop!"
}  else {
	return "invalid input"


}
}

let userInput = "Yellow"
console.log(trafficLight(userInput));