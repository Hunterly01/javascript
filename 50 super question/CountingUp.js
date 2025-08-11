function countUp(number){
total = 0;
let array = [];
for(let count = 1; count <= number; count++){
total = count + 1;
array.push(total)
}
return array;
}




let number = 7;
console.log(countUp(number));