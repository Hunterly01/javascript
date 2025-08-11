function checkEvenList(number){
let array = [];
for(let count = 1; count <= number; count++){
if(count % 2 == 0){
array.push(count)
}

}
console.log(array.join(", "));

}




let number1 = 10;
console.log(checkEvenList(number1));


