let person = {  firstName: "feyi",
		lastName: "onoja",
		age: 92,
		nationality: "Togolese",
		}

for(const detail in person){
	if(detail === "age"){
console.log(` ${detail}: ${person[detail]}`)
}

}