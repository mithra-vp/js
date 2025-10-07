const prompt = require ('prompt-sync')();
let temperature = prompt("Enter the temperature: ");

let  myPromise = new Promise((resolve,reject) => {     // creating promise object
    // let temparature = 10;

    setTimeout(()=> {
       if (temperature > 30) {
           resolve("Its warm outside")    
       } else {
           reject("Its cool outside")
           
       }

    },2000)
});

myPromise
   .then(result => console.log(result))
   .catch(error => console.log(error))
   .finally(() => console.log("Promise execution finished"));