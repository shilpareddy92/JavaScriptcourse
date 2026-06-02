//1. every():
let num = [1,2,3,4,5];
let isless = num.every((e)=>e <10);
console.log(isless);


//2. some():
let isSome=num.some((e)=>e %2 ===0);
console.log(isSome);
isSome=num.some((e)=>e %2 ===0);

//3. find():
let total = [10,2,3,5,7,9];
let fe = total.find((e) => e%2===0);
//-1 if not found  e%4
console.log(fe);


//4. indexOf():
let arry = ['apple', 'banana','mango', 'pear'];
let indexof_str = arry.indexOf('pear');
 //-1 if not found in
 console.log("index of given string: ", indexof_str);


 //5. lastIndexOf():
 let fruits = ['apple', 'apple', 'banana','mango', 'pear','apple' ];
 let lastApple = fruits.lastIndexOf('apple');
console.log(lastApple);


//6. reverse():
let frts = ['apple', 'banana','mango', 'pear' ];
let revFruits = frts.reverse();
console.log(revFruits);

//7. sort():
let products = ['macbook', 'Imac','imac','samsung', 'canon' , '123test', 'Tshirt'];
let proSort = products.sort();
console.log(proSort);

