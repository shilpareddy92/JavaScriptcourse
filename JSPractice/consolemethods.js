// various wazs of using console messages
console.log("Hello World")
console.error("array error");
console.warn("some warning!!");
console.info("this is my js code");

const user = {
    name: "john",
    age: 34,
    city: "Bangalore",
    contry: "India"
};

const user1 = {
    name: "Lisa",
    age: 30,
    city: "LA",
    contry: "USA"
};

console.table([user, user1]);
//console.table({user,user1});


console.group("Login feature");
console.log("reset pwd");
console.log("error login mssg");
console.log("enter username/password");
console.groupEnd();

console.time("print 1 to N values");
for (let i=1;i<=1000;++i){
     console.log(i);
}
console.timeEnd("print 1 to N values")


console.clear();

console.count("reset");
console.count("reset");


console.assert(10===20);
console.assert(10===10);
console.assert(10===30,"NOT EQUAL");

/*  function testMyJob(){
    console.trace();
 }

 testMyJob(); */

console.log("%c I love JavaScript Coding!!!", 
                    "color:green; background-color:lightblue; border:solid");


