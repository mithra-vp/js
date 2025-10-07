function greet(fname,lname,...titles){
    console.log(`Name: ${fname} ${lname}`);
    console.log(`Titles: ${titles.join(', ')}`);
}
greet("Mithra","Sumi", "Developer","Auther","Engineer");