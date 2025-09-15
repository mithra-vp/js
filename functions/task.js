function addNumber(num){
    console.log(`The sum of ${num} is ${num + num}`);
}

function sumResult(callBack){
    const number = 2;
    callBack(number);
}

sumResult(addNumber);
