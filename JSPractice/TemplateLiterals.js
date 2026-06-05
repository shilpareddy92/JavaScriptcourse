//Template Literals in strings
//after E6 moudle we got this
//these are defined by  //backticks => ``

const name = "Shilpa";
const age = 30;
const mssg =`Hello  My name is ${name} and my age is ${age}`;
console.log(mssg);


const multiLine = `hi this is my javascript code 
 and im so happy
 and I want to be perfect in JS
 ohh yes!`;
console.log(multiLine);   
    

const a = 10;
const b = 20;
console.log(`The sum of ${a}  & ${b} is ${a+b}`);


function getXpath(name){
    return `//input[@id='${name}']`;
}

console.log(getXpath('shilpa'));//input[@id='shilpa']
console.log(getXpath('shilpa\'s'));//input[@id='shilpa's']