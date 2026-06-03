function print(){
    console.log("hi");
}
print();//hi undefined age undefined latest is called

function print(name){
    console.log("hi " + name);

}

function print(name, age){
    console.log("hi " + name + " age "+ age);

}

//calling:
print();//hi undefined age undefined
print("Shilpa")//hi Shilpa age undefined
print("Shilpa", 20);//hi Shilpa age 20


//run test cases on remote machine:
//browserName, browserVerison, remoteExecution

function displayBrowserInfo(browserName, browserVerison, remoteExecution){
    if(typeof browserVerison === 'number' && typeof remoteExecution === 'boolean'){
        console.log(`Browser: ${browserName}, 'version:' ${browserVerison}, 'remoteExe:' ${remoteExecution} `);
    }
    else if(typeof browserVerison === 'number'){
        console.log(`Browser: ${browserName}, 'version:' ${browserVerison}`);
    }
    else{
        console.log(`Browser: ${browserName}`);
    }
}

displayBrowserInfo('chrome', 115, true);
displayBrowserInfo('chrome', 115);
displayBrowserInfo('firefox');

