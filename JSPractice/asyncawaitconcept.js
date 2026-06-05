//modern way of handling async calls or Tasks
//  used mostly with PROMISES
//async - keyword written before function name
//await -keyword/operator:async steps

async function f1() {
  //it will return promise- MANDATORY(resolved or rejected)
  /*  step 1-sync´no need of await
    step2 async then await (wait for this repsonse)
    step3 async then await (wait for this repsonse)
    */
}
function f2() {
  /* if we have normal function we CANNOT use await Keyword
   *
   * */
}
//async function without await
async function f3() {
  console.log("this is async function without await step");
  return 42;
  /**
   * if we are return any string or integer
   * wrapped 42 in the resolved promise and return
   */
}

async function f4() {
  throw new Error("error mssg is here ");
  /**
   * if we are return any string or integer
   * wrapped the error in the rejected promise and return
   */
}

//async function without await but with error:
async function f5() {
  console.log("this is an async function with error");
  throw new Error("error");
  /**
   * in async it is not mandatory to have Await keyword
   * dont have any await(async) steps -YES
   * and VICEVERSA is not possible means
   * if the function is normal we cannot write Await keyword
   *
   */
}

//async function with a resolved/rejecte promise:
function f6() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
      resolve("Resolved");
    }, 2000);
  });
}

async function f7() {
  // it will wait untill promise is executed so we MUST use Await
  const result = await f6();
  console.log(result);
}

function getInfo(){
    return new Promise((resolve, reject)=>{
        const randomNumber = Math.random();
        setTimeout(()=>{
            if(randomNumber < 0.5){
                resolve(randomNumber);
            }else{
                reject(new Error("wrong value error"));
            }
        }, 2000);
    })
}

f3().then((result) => {
  console.log(result + 1);
});

f4().catch((error) => {
   console.log(`the error message ${error}`);
});

getInfo()
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });


    //create async function which is calling getinfo()
async function getNumberInfo(){
   try{ 
   const result = await getInfo(); //async step
   console.log("Result: ", result);
   }
   catch(error){
    console.log("Error:", error);
   }
}

//call getNumberInfo():
getNumberInfo();
