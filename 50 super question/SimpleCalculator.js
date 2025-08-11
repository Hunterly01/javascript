const userInput = require("prompt-sync")();
let firstNumber = parseFloat(userInput("enter the first number:"));
let operator = userInput("enter the operator + or - :");
let secondNumber  = parseFloat(userInput("enter the second number:"));
let reult = 0;

if(operator === "+"){
console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
} else if(operator === "-"){
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
} else {
console.log("invalid operators");
}

