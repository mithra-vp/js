// IIFE - immediately invoked function expression

// call the function before run the document - IMMEDIATELY INVOKED FUNCTION EXPRESSION

// ------key features-------
// 1. immediately invoked
// 2. data privacy - variables defined inside iife are not accessible outside
// 3. closure - it has outer function & inner function after the execution the inner function can access the variables, methods etc from outer function
// self containe - executes independantly with effecting surrounding code

(function(){
    console.log("I am invoked");
})();
