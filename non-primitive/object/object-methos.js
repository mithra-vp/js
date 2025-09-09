// you can store functions inside object are called methods

// ".this" - keyword = its refers the objects itself.(used to access properties and methods )
const car = {
    brand: "toyota",
    start: function(){
        // console.log('car started');
        console.log(`${this.brand} is started`);
    }
}

car.start();

