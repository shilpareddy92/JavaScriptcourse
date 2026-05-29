// Declaration of an array
let myArray = []; // An empty array
 
let lang = ["Java", "Python", "JS"];


//1. push: add elements to end of array
lang.push("Ruby", "TS");
lang.push("HTML");
console.log(lang);

//2. pop:removes elements from end of array
let numbers = [1, 2, 3, 4, 5];// An array with numbers
numbers.pop();
lang.pop();
console.log(numbers);
console.log(lang);

//3. shift: shift(remove) and return the element from start of  array
let fruits = ["apple", "banana", "orange"]; // An array with strings
let fistFruit = fruits.shift();
console.log(fistFruit);
console.log(fruits);



//4. unshift: Inserts new elements at the start of an array, and returns the new length of the array.
let colors = ['red', 'green', 'black', 'white'];  
console.log(colors.length);
colors.unshift('blue', 'pink');
console.log(colors);
console.log(colors.length);


//5. splice:
let animals = ['dog','cat','bird','fish'];   
animals.splice(1,2,'bear','elephant','fox');
console.log(animals);

//6. slice:returns a new subset of array
let pop = [1,2,3,4,5];
let newPop = pop.slice(1,5);//(]
console.log(newPop);


//7. concat:
let fr = ["apple", "banana", "orange"];;
let num = [1,2,3,4];
let mixedArray = fr.concat(num);
console.log(mixedArray);

//8. indexOf:
let color = ["black", "red", "green", "blue", "red"];
let indexRed = color.indexOf("red");
console.log(indexRed);
let naveenIndex = color.indexOf("shilpa");
console.log(naveenIndex);// if no value returns -1

//2nd red index:
let redSecondIndex = color.indexOf("red",color.indexOf("red")+1);
console.log(redSecondIndex);

//9. includes:
let test = ["admin", "customer", "seller", "vendor"];
let flag = test.includes("seller", "naveen");
let aflag = test.includes("seller1", "naveen");
console.log(flag);
console.log(aflag);

//10. forEach:
let n = [1,2,3,4,5,6,7];
n.forEach((e) => {
    console.log(e * 2);
})
