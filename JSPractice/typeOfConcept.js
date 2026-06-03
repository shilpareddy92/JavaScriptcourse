let x = 30;
console.log(typeof x);
// type of variable is decided during runtime
//no complie time  
//JS it is not compile time language it is interpreted language

x = "Hello";
console.log(typeof x);

x = {
    name: 'John',
}
console.log(typeof x);

let flag = true;
console.log(typeof flag);
let type = typeof flag;
console.log(type);

const arr = [1,2,3,4,5];
console.log("typeof array is "+typeof arr);//object

const j = null;
console.log("typeof null is "+typeof j);//object

let y;
console.log("typeof undefined is "+typeof y);

function print(name){
    console.log("My Name is "+name);
}

console.log(typeof print);//"function"