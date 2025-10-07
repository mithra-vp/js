const person = {name:'Mithra' , age:22 , country:'India'};

// basic destructuring

const {name, age} = person;
console.log(name);
console.log(age);

// Rename variables

const {country: nation} = person;
console.log(nation);

// default values

const { gender = "Female"} = person
console.log(gender);
