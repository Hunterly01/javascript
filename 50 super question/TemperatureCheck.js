function checkTempersture(){
let initialTemperature = 30;
const userInput = require("prompt-sync")();
let userTemperature = userInput("Enter a Temperature:");

if(userTemperature > initialTemperature){
	return  "Hot!";
} else if (userTemperature >= 15 && userTemperature <= 30){
	return  "Nice!";

} else if(userTemperature < 15 ){
	return  "Cold!";
}
}




let userInput = 16;
console.log(checkTempersture(userInput));