//1. function decalration:

function print(){
    console.log("hi this is JS");
}
print();

function add(a,b){
    return a+b;
}

console.log(add(7,6));


//2. Function Expression: Annonymous function
const multiply = function(x, y){
    return x*y;
}
console.log(multiply(5,6));


//3. Arrow function expression:Annonymous function
const divide = (t1,t2) => t1/t2;
console.log(divide(20,2));

//4. Function Constructor:
//const substract =new Function("a","b",'return a - b');
//const substract =new Function('a',"b",'return a - b');
const substract = new Function('a', 'b' , 'return a - b');
console.log(substract(16,2));

//5. IIFE(Immediately Invoked Function Expression):
(function(){
    console.log("Immediately Invoked Function Expression");
})();

//6. Generator Function:
//function* and yield keyword

function*  generator(){
 yield 1;
 yield 2;
 yield 3;
 yield 4;
}

const generatorFun = generator();
console.log(generatorFun.next().value);
console.log(generatorFun.next().value);
console.log(generatorFun.next().value);
console.log(generatorFun.next().value);

//7. Annonymous function:
//no specific name
let num  = [1,2,3,4,5];
console.log(num.map((e)=>e*e));
console.log(num.map(function(e){
    return e *e;
}));


//8. Recursive function:4 -> 4*3*2*1=24
function factorial(value){
    if(value <=1) return 1;
    return value * factorial(value-1);
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(100));

//9. Higher-Order Function:
function additon(a,b){
    return a+b;
}

function multiplication(a,b){
    return a*b;
}
function substraction(a,b){
    return a-b;
}

function operate(funcName, a, b){
        return funcName(a,b);
}

console.log(operate(additon, 5,6));
console.log(operate(multiplication, 5,6));
console.log(operate(substraction, 5,6));




