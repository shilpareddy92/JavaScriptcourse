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