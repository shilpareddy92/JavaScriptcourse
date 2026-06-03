// Parent class(suoer class)
class Vehicle{
    constructor(make, model,year){
        this.make = make;
        this.model = model;
        this.year = year;
        //console.log("parent class vehicle constructor")
    }
    getInfo(){
        return `${this.make}, ${this.model}, ${this.year}`;
    }
    startEngine(){
        console.log('Starting engine...' + this.make);
    }
    stopEngine() {
        console.log("Stopping Engine...");
    }
}

//child(Sub class):
class Car extends Vehicle{
    // though we dont have constrcutor we can do instances
    constructor(make, model, year, fuelType){
        super(make, model, year);//call the parent class constructor
        this.fuelType = fuelType;
    }

    driverCar(){
        console.log('driving the car ' + this.model + " " + this.fuelType);
    }
}

//child(Sub class):
class Truck extends Vehicle{
    constructor(make, model, year, loadingCapacity){
        super(make, model, year);//call the parent class constructor
        this.loadingCapacity = loadingCapacity;
    }

    driverTruck(){
        console.log('driving the truck ' + this.model + " capacity " + this.loadingCapacity);
    }
}

//creating the objects (instances): new keyword:
const car = new Car("Honda", "Civic", 2023, "Petrol");
const truck = new Truck("Tata", "Sumo", 2020, 100);
const vehicle = new Vehicle("Mahindra", "Tractor", 2020, 100);

car.driverCar()
car.startEngine()//parent class method is avaiable to child
//car.driverTruck();//ERROR;car.driverTruck is not a function
truck.driverTruck()
//truck.driverCar()// ERROR:truck.driverCar is not a function
truck.getInfo()// parent class method is avaiable to child
vehicle.stopEngine()
//vehicle.driverTruck();//vehicle.driverTruck is not a function






