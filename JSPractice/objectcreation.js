//1. Object Literals: {}
const user ={
    name:'shilpa',
    occupation:'software Engineer',
    country:'india',
    age : 25
}

console.log(user.age);
console.log(user.name);
console.log(user.occupation);
console.log(user.country);


//2. Constructor Function:
function Car(brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;
}

const car1 = new Car("BMW", "520d", 10000);
const car2 = new Car("Audi", "Q7", 15000);

console.log(car1.brand+" "+car1.model+" "+car1.price);
console.log(car2.brand+" "+car2.model+" "+car2.price);


//3. Class style:
class Customer{
    constructor(name, product){
        this.name = name;
        this.product = product;
    }
    addToCart(){
        console.log(`${this.product} added to ${this.name} cart`);
    }
}

//instance of the above class:
const cust1 = new Customer("Shilpa", "Apple MacBook Pro");
console.log(cust1.name);
console.log(cust1.product);
cust1.addToCart();


//4. Object.create(): with some prototype object.
const employeePrototype = {
     printInfo:function(){
        console.log(`hello, emp name is ${this.fullname}`);
        console.log(`hello, emp salary is ${this.salary}`);
    }
}

const e1 = Object.create(employeePrototype);
e1.salary = 6000000;
e1.fullname = "shilpa";
e1.printInfo();

//4. using Factory Functions: returns an object.
function createDepartment(deptName, hod ){
    return {
        deptName: deptName,
        hod: hod,
        getDepartmentInfo:function(){
            console.log(`hello, dept name is ${this.deptName} and hod is ${this.hod}`);

        }
    }
}
const dept1 = createDepartment("Physics", "H C Verma");
const dept2 = createDepartment("Maths", "R C Sharma");
dept1.getDepartmentInfo();
dept2.getDepartmentInfo();
console.log(dept1.deptName + " "+ dept1.hod)

