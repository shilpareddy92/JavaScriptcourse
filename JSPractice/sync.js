//sync vs async behaviour:
/** SYNC BEHAVIOUR
 * In synchronous programming, JS executes code in a linaer and sequential manner.
 * Each of the line executed one after the other,
 * and the program waits for each operation to completed before moving on the next
 * This can lead to blocking behaviour
 * //1 -- done -- > fetch 100 users from the API/DB -- 20 secs
//2 -- done -- display user profile -- 10 secs
//3 -- done
//4 -- done
//end
///blocking behaviour for the user
 */

/* console.log("Sync start");
for (let i = 0; i < 300000; i++) {
  console.log(i);
}
console.log("Sync end"); */

/** ASYNC BEHAVIOUR
 * In asynchronous programming, JS allows tasks to be started
 * and continue in the background while the program executes other code.
 * This is especially usefull for the tasks that take some time
 * like fetching data from server or reading the files
//1 -- fetch user -- 100 users are coming from API/DB --> 20 secs --> callback function: Promises
//2 -- display user profile -- 10 secs
//3 -- fetch order info -- 5 secs
//4 -- do something else
 */
console.log("Async start");
setTimeout(()=>{
    console.log("time out is done");
}, 10000);

const sum = (a,b)=> a+b;
console.log("task1 ",sum(2,3));

sum();
let array= [1,2,3,4,5,6]
console.log("task2 ",array.map((e)=> e*2));

console.log("task3", array.reduce((acc, num)=> acc+num,0));





