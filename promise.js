// a promise in js it is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

// resolve - call when the operation is successfull.
// reject - call when the oeration is fails.

// .then - execute if the promise is resolved.
// .catch - executes if the promise is rejected.
// .finally - executes regardless whether the promise is resolved or rejected

// creating promise

let  myPromise = new Promise((resolve,reject) => {     // creating promise object
     let success = false;

     setTimeout(()=> {
        if (success) {
            resolve("Promise resolved successfull")    
        } else {
            reject("Promise is rejected")
            
        }

     },2000)
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Promise execution finished"));
