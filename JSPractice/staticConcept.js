//if we have common property and behaviour  then go for STATIC keyword
class Car{
     static wheels = 4;
     constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price;
        //this.wheels =40; //current class object BADWAY
     }

     static stop(){
        console.log("car -- stop")
     }
     static start(){
        console.log("car -- start")
     }

     drive(){
        console.log(this.name + " is driving");
     }
} 

const c1 = new Car("Honda", 2023, 50);
console.log(`${c1.name} ${c1.model} ${c1.price} ${Car.wheels}`);

const c2 = new Car("Maruthi", 2026, 1000);
console.log(`${c2.name} ${c2.model} ${c2.price} ${Car.wheels}`);
console.log(c1.wheels); //undefined
//c1.start();//c1.start is not a function
c1.drive();
Car.drive(); //Car.drive is not a function

//static variable/function:  call it by using class name
//non static variable/function: call it by using object reference name