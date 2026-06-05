//destructuring
//It is feature in JS that will allow you to extarct the values 
//from array/Object and assign those values in a specific variable
//or in number of variables in a more convient way
//array/object ---> variables

//array:
const numbers = [1,2,3,4,5];
const [a,b,c,d] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(d);



const lang = ["JavaScript", "Java", "Ruby", "Python", "GO"];
const [p,q, ...testLang] = lang;
console.log(p);
console.log(q);
console.log(testLang);


//Object:
const user = {
    firstName: "Shilpa",
    lastName :"Vallapureddy",
    age: 30
};
const{firstName, lastName,city="Bangalore", age} = user;
console.log(age);
console.log(firstName);
console.log(lastName);
console.log(city);

//function params:
//without destrucring:
function printUserName(person){
    console.log( person.firstName + ' ' + person.lastName );
}

 const person = {
    firstName:"John" ,
    lastName :'Doe',
 };
printUserName(person);

//with destrucring:
function printName({firstName,lastName}){
     console.log(`${firstName} ${lastName}`);
}

const person1 = {
    firstName:"Testing" ,
    lastName :'Automation',
};

printUserName(person1);