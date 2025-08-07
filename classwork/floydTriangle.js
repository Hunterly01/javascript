function floydsTriangle(numberOfRows){
let number = 0;
for (let row = 1; row <= numberOfRows; row++){
	let line = "";
	for(let column = 1; column <= row; column++ ){
	if(number < 9){
	line +=" ";
	}
	if(number == 10){
	line +="";
	}
number++;
line = line+" "+number;
}
	console.log(line);
}
}


console.log(floydsTriangle(8));