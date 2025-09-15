// function declaration is the one of the ways to define function

// syntax:
// function functionname(params) {
//     function body
// }

// parameter is the defined inside the paranthesis

function greet(name){
    console.log("Hello, " + name);
}
greet("Mithra");   // mithra is an argument

// ----key feature-----

// 1. Hoisting - ( hoisted means call the function before define the function)
// 2. Named - thats means function declaration must have a function name
// 3. Global or Local scope - its defined  outside any block, its globally scoped . if defined inside a block is called local scoped