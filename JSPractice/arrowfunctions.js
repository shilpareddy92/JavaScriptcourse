// one parameter
const square =(num) => num *num;
//const square = num => num * num; VALID
console.log(square(5));


// no parameter
const blank = () => "hello Arrow functions";
console.log(blank());

// two parameter
const sum = (a,b) => a+b;
console.log(sum());//NaN
console.log(sum(10,20));//30

const testObject = (anObject) =>  `${anObject.firstname} ${anObject.lastname} ${anObject.Designation}`  

const person = 
{
    firstname:'Shilpa',
    lastname:"vallapureddy",
    Designation:"Software developer"
}

console.log(testObject(person));

const greet = (username ="guest", age="0")=> `The ${username} age is ${age}` 
console.log(greet());
console.log(greet("achyutha", "8"));


//rest parameters ... varargs
const addition =(...numbers) => numbers.reduce((acc,num)=>acc+num,0);
const total = addition(1,2,3,4,5);
console.log(total);

const browserInfo = (browser = 'chrome', ...details) => {
    console.log(`Browser: ${browser}`);
    console.log('other details:', details);
};

browserInfo();
browserInfo('firefox', '115.11', 'mozilla', 'headless');

//max number using Math
const findMaxNumber = (a,b,c) => {
    return Math.max(a,b,c);
};

console.log(findMaxNumber(10,30,50));





