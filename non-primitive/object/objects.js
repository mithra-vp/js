const person = {
    name: 'Akash',
    age: 22,
    isStudent: false
}
console.log(person.name);
console.log(person.age);

// add or modify datas

person.city = "new york";
console.log(person);

person.age = 23;
console.log(person)

person.name = "mithra";
console.log(person)

// delete city from person details
delete person.city;
console.log('final person ddetails',person);