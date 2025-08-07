function arraySort(scores){
let number = 0;
for(let count = 0; count < scores.length-1; count++){
for(let counter = count; counter < scores.length; counter++){
if(scores[count] > scores[counter]){
number = scores[counter];
scores[counter] = scores[count];
scores[count] = number;
}
}
}
return scores;
}




let array = [40, 25, 49, 56, 90];
arraySort(array);
console.log(arraySort(array))