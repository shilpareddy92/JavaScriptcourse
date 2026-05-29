//for loop:
//1 to 10:
for(let i=0; i<=9; i++){
    console.log(i);//1 2 3 4 ....10
}
console.log("------");

//for...of loop:
const array = [1,2,3,4,5];//0 to 4 => 5
for(const e of array){
    console.log(e);
}
//for loop
console.log("------");
for( let i=0; i<array.length; i++){
    console.log(array[i]);
}
console.log("------");
//i<=array.length will give eroor
//while: 1 to 10:
let p = 1;
while(p<=10){
    console.log(p);//1 2 3 ....10
    //p++;//11
   // ++p;
   p=p+1;
}
console.log("------");

console.log("------");
let l = 2;
while(l<=100){
    console.log(l);//2 4 6 8 10
    l = l+2;//12
}
console.log("------");

//do-while:
let h = 1;
do{
    console.log(h);//1 2......10
    h++;//11
}
while(h <= 10);
console.log("-----------------------")

//break:
//1 to 100: print the hi when you see the multiplication of 5 and break:
let num = 5;
while(num <= 100){
    console.log(num);
        if(num % 5 == 0){ //5%5 ==0
            console.log("hi -- bye");
            //break;
        }
       num++; 
}

console.log("------------------------")

//
const browser = ["chrome", "firefox", "edge", "IE"];
for( const e of browser){
        if(e == "edge"){
            console.log("launch edge...");
            break;
        }
}
console.log("-----------")
//for...in loop on object:
const user ={
    username:"shilpa",
    age :  30,
    city :"Bangalore"
}

for(const value in user){
    console.log(user[value]);
}

//
console.log("-----------")
const br = ["chrome", "firefox", "edge", "IE"];
for(const ele in br){
    console.log(ele + ":" + br[ele]);
}