let number = 0;
for (let row = 1; row <= 5; row++){
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