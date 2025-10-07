const students = [
    {name:"Mithra",age:20, grade:'A'},
    {name:"Sumi",age:21,grade:'B'},
    {name:"Mufeeda",age:22, grade:'A+'}
]

// accessing datas
console.log(students[0].name);
console.log(students[1].grade);

// looping through object array
students.forEach(stdnts =>{
    console.log(`${stdnts.name} is ${stdnts.age} years old`);
})