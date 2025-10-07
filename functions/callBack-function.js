// function passing inside another function as an argument this is called callBack function

// -----for what-----
// synchronous- line by line execution
// asynchronous-time delay,

// 1. asynchronous- handle asynchronous operations
// 2. customize behaviour of general purpose functions
// 3. avoid blocking code execution

// multiline string support cheyan ``


// this is our callBack function
function greetUser (name){
    console.log(`Hello ${name}`);
}

// this function takes another function(callBack function) as an paramater

function getUserInput(callBack){  // (callBack) that means that is a function
    const name = "mithra";
    callBack(name);    // calling the callBack function with the user's name
}

getUserInput(greetUser);


// callBack is also called pyramid of doom
// multiple nested callBacks make the code difficult to read and maintain is called callback hell.
// prevented by promise

