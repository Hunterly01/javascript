function squareNumbers(number){
let array = [];
let square = 0;
for(count = 1; count <= number; count++){
square = count * count;
array.push(square);

}
return array
}




let number = 5;
console.log(squareNumbers(number))