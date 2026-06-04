//callback function
//It is a function that is passed as argument to another function
//async call/task -once this task is completed -then only callback function will be called


//basic callback: here test is callback function
function greet(name, test){
    console.log('Hello ' + name);//normal/sync step/task , could be async call/api
    test();
 
}
//callback function
function welcome(){
    console.log('welcome!!!!');
}

greet('Shilpa', welcome);

//callback with async function:
function printInfo(name, callback){
    //async function/task/step:
    setTimeout(() =>{
        console.log("printing info for " + name);
        callback("plz call me back...");
   }, 5000);//delay of 5000ms/5 sec after 
   //instruction for  settimeout once ur task is completed
   //then u please call the callback  function
   //if u write the callback outside the async call then
   //callback executes and then console prints.
 }

//callback function
 function displayMessage(mesg){
    console.log(mesg);
 }



printInfo("Lisa", displayMessage);