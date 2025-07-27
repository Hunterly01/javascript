function getScore(){
	let userInput = prompt("Enter student score:");
	let score = parseInt(userInput);
	if (score > 100 ){
		return "invalid score must be between 0 and 100"
	 } else {
		return score
}
}



function calculateGrade(score){
	if (score >= 70){
		return "A";
}
	if (score >= 60){
		return "B";
}
	if (score >= 50){
		return "C";
}
	if (score >= 45 ){
		return "D";l
}
	if (score >= 40){
		return "E";
}	else{
		return "F";
}
}


function getFeedback(grade){
	if (grade == "A"){
		return "Excellent performance"
}
	if (grade == "B"){
		return "Good job, keep improving"
}
	if (grade == "C"){
		return "You can do better, don't give up"
}
	if (grade == "D"){
		return "don't give up"
}
	if (grade == "E"){
		return "Needs improvement"
}
	if (grade == "F"){
		return "Scream for help"

}
}

function main() {
let scre = console.log(userScore);
let grade = calculateGrade(score);
getFeedback(grade);

}