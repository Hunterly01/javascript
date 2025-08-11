function countNumber(number){
for(let count = 1; count <= number; count++){
if(count == 1){
	return "Number 1";
}
if(count == 2){
	return "Number 2";
}
if(count == 3){
	return "Number ";
}
if(count == 4){
	return "Number 4";
}
if(count == 5){
	return "Number 5";
}
}
}

let pick = 5;
console.log(countNumber(pick));