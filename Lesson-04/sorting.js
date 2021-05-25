"use strict"

function compare(a,b){
 return a-b;
}


var numb =[1,4,7,-2,0,76,2,45,38,-4,-1,5,6,-5,43,98,-9,87,5,11,23]
console.log(numb);
numb.sort(compare);
console.log(numb);
numb.reverse();
console.log(numb);

var positive = numb.filter(function(number){
	return number >=0;	
});
console.log(positive);

function isPositive(number){
	return number >=0;
}


var notPositive = numb.filter(function(number){
	return number <0;	
});
console.log(notPositive);


console.log(numb.indexOf(1));
console.log(numb.lastIndexOf(9));


