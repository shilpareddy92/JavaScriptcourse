//1.var;old way
//ES6
//Scope:var
//funtionally/locally+global scope
var x=10;

function test(){
    var y= 20;
}
console.log(x);
var pop="Hi JS";

function test1(){
   var top="Hello JS";
   console.log(top);
}


//console.log(top);//top is not defined
test1();
console.log(pop);

//var - redeclaring ALLOWED
var browser = "chrome";
var browser = "firefox";
console.log(browser);// firefox

///var - reinitilzation ALLOWED

browser = "Edge";
console.log(browser);// Edge

var g;// unDEfined
console.log(g);

//ISSUE with var
var flag ="hey Shilpa";
var t1=4;
if(t1> 3){
     var flag ="hey Dwaraka";
}
console.log(flag);
////Let   most used/improved
///scope: blocks{}
let m="hey Shilpa";
let t2= 4;
if(t2> 3){
     let msg ="hey Achyutha";
     console.log(msg);
}
console.log(m);
//console.log(msg);//msg is not defined
//let - redeclaring  NOT ALLOWED
//let m="hey Shilpa";

///let - reinitilzation ALLOWED
m="Hey Rayansh";

//const
const mg = "hey shasank";
console.log(mg);
//mg="hey senha";//TypeError: Assignment to constant variable.

const days=7;
//days=10;
console.log(100 *days);
var p;
let q;
//const r;
console.log(p);
console.log(q);
