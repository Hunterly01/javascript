const userInput = require("prompt-sync")();
let words = userInput("enter the first number:");
let vowelCount = 0;

for(let letter of words.toLowerCase().tocharArrau()){
if(letter === "a" || letter === "e" || letter === "i" || letter == "o" || letter === "u"){
vowelCount++;
}
}
console.log(vowelCount);