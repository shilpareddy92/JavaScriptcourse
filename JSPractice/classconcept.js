class Car{
    constructor(name,brand, price, color){
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    /*constructor(name) {
        this.name = name;
        A class may only have one constructor
    }*/

    refuel(){
        console.log(this.name + " car is refueld");
    }
}
/**above is equivalent  to below
 * class Car {
    constructor(name) {
        this.name = name;
    }
}

Car.prototype.ride = function() {
    console.log(this.name + " car is refueled");
}; */

const c1 = new Car("City","HONDA",1800000,"Black");


console.log(`The  ${c1.color} ${c1.brand} ${c1.name} car price is ${c1.price}`);
c1.refuel();
console.log("---------");


const c2 = new Car("AMAZE","HONDA",1200000,"white");
console.log(`The  ${c2.color} ${c2.brand} ${c2.name} car price is ${c2.price}`);
c2.refuel();