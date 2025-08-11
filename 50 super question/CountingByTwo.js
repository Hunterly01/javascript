function countByTwos(number){
	let array = [];
	let total = 0;
for(let count = 1; count <= number; count++){
if(count % 2 == 0){
total = count + 2;
array.push(total);
}
}
return array;
}



let number = 10;
console.log(countByTwos(number));