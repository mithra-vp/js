let myPromise = new Promise((resolve, reject) => {
    let username = ("admin");
    let password = ("1234");

    if (username === "admin" && password === "1234") {     // true && true => true
        resolve("Login successfull...")

    } else {
        reject("Invalid username...!")
    }

});

myPromise
    .then(success => console.log(success))
    .catch(invalid => console.log(invalid))
    .finally(() => console.log("Promise execution finished"));