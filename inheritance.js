// one class can inherits properties and methods from another class
// (by using 'extends' keyword)

// base class

class Animal {
    constructor(name) {
        this.name = name;  // initialization of properties
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

//dervived class inherits from animal

class Dog extends Animal {
    constructor(name, breed) {
        super(name); //calls the parent constructer
        this.breed = breed;
    }
    // override speak method (polymorphism)
    speak() {
        console.log(`${this.name}-${this.breed} barks`);
    }

}

const dog = new Dog("Rex", "German shepherd");
dog.speak()


// hw  vehicle and type of vehicle