// returns a new array with elements that match a condition

// === (stricly equal two) value and data type equal aavanam
// == only check values

let numbers = [1,2,3,4,5,];
let evenNum = numbers.filter(num => num % 2 === 0);
console.log(evenNum);

console.log( 2 == "2");
console.log( 2 === "2");