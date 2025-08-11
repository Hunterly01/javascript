function calculateGrade() {
const userInput = require("prompt-sync")();
let  userScore = userInput("Enter a score from 1 to 100:");
if(userScore >= 90){
return "A";
} else if(userScore >= 80){
return "B";
} else if(userScore >= 70){
return "C";
} else {
return "F";
}
}

let grade = 70;
console.log(calculateGrade(grade))