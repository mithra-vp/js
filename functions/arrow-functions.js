// ECMA script
// ES6 2015 latest version


// ------feature----------

// shorter way to define a function
// class, constructors
// shorter syntax for define=ing a function is called arrow function



// const handleSubmit = () => {
//     // block of code
// }


// -----function declaration------

// function add(a,b){
// return a+b;
// }
// console.log(add(2,4));

// ------arrow function------ 
// arrow function is a shorter syntax for writing functions in java script ,also introduced in ES6(ECMA SCRIPT 2015)

const add = (a, b) => a + b;
console.log(add(2, 2));

//-----single parameters (no parantheses needed)-----
const square = x => x * x;
console.log("square of 4: ", square(4));

// ----No parameters(empty parantheses)-----

const greet = () => console.log("hlo....");
greet();

// ----multi-line function---- use {} and code inside the curly braces

const divide = (a, b) => {
    const result = a / b;
    return result;
}
console.log("division of 10,2 is: ",divide(10, 2));