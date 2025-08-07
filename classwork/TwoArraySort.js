function TwoArraySort(number1, number2){
let storeNumber = 0;
let result = number1;
let resultLen = number1.length + number2.length;


for(let index = number1.length; index < resultLen; index++){
result[index] = number2[storeNumber];
storeNumber++;
}


for(let count = 0; count < result.length - 1; count++){
for(let counter = count; counter < result.length; counter++){
if(result[count] > result[counter]){
storeNumber = result[counter];
result[counter] = result[count];
result[count] = storeNumber; 
}
}
}
return result;
}



let array1 = [40, 25, 49, 56, 90];
let array2 = [36, 37, 43, 53,100];
TwoArraySort(array1, array2);
console.log(TwoArraySort(array1, array2));