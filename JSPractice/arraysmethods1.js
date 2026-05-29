//1. map:
let numbers = [1,2,3];
let doubleNumbers = numbers.map((e) =>e *2)
console.log(doubleNumbers)

// F -> C
//(F-32) * (5/9)
let fahTemp = [32,68,86,104,212];

function fahTocel(fah){
    return (fah-32) * (5/9);
}
let celTemp = fahTemp.map(fahTocel);
console.log(celTemp);

//2. filter:
let num = [1,2,3,4,5,6,7,8,9,10];
let evenNum =num.filter((e)=>e% 2 ===0);
console.log(evenNum);
let oddNum =num.filter((e)=>e% 2 ===1);
console.log(oddNum);



let employee = [
    {name:"John", age:30, gender:"male" },
    {name:"Bob", age:35, gender:"male" },
    {name:"Lisa", age:40, gender:"female" },
    {name:"Priya", age:25, gender:"female" },
    {name:"Peter", age:55, gender:"male" },
];

let femaleEmpOver30 =employee.filter((emp)=>{
return  emp.gender == "female" && emp.age>30
});
console.log(femaleEmpOver30);


//3. reduce:
let numArray = [1,2,3,4,5];
let sum =numArray.reduce((acc,num)=>acc+num,0);
console.log(sum);//15
//1st --> 0+1 = 1
//2nd --->1+2 = 3
//3rd ---->3+3 = 6
//4th--->6+4=10
//5th--->10+5 = 15

//max number in the array:
let top = [10,5,25,8,30,15]; //30
let maxNum = top.reduce((max, num)=>{
    if(num>max) return num;
    return max;
},top[0]);

console.log(maxNum);
//1st--> max = 10, num = 10 return max=10;
//2nd --->max = 10, num = 5 return max=10;
//3rd ---->max = 10, num = 25 return num=25
//4th--->max = 25, num = 30 return num=30
//5th---> max = 30, num = 15 return max=30


//min number in the array:
let minNum = top.reduce((min, num)=>{
    if(num<min) return num;
    return min;
},top[0]);

console.log(minNum);
//1st--> min = 10, num = 10 return min=10;
//2nd --->min = 10, num = 5 return num=5;
//3rd ---->min = 10, num = 25 return min=5
//4th--->min = 5, num = 30 return min=5
//5th--->min = 5, num = 15 return min=5


//cart : name, price
let cartItems = [
    {name:"Jeans", price:500},
    {name:"Shirt", price:300},
    {name:"Shoes", price:1000},
    {name:"Hat", price:1000},
    {name:"Tshirt", price:400},
];

let totalCost = cartItems.reduce((acc, num)=>num.price+acc,0);
console.log(totalCost);
     