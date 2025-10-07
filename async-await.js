// async - async marks a function that will return a promise

// declaration

async function Hello(){

}

// function expression  

const sayBye = async function(){

}
// arrow function

const sayHello = async() =>{

}

// async ----returns promises
// await----await pauses the function execution until promise is resolved(or reject)
// it makes asynchronous code look and behave like synchronous code.


function fetchData(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Data loaded!")
        },2000)
    })
}

async function getData(){
    console.log("start");
    const result = await fetchData();
    console.log(result);
    console.log("end");
}
getData();