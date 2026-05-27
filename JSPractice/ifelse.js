function checkAge(age){
if(age>=18){
    console.log("you are old enogh to vote");
}
else console.log("You are a minor.")
}
checkAge(18);

function checkNumber(number){
    if(number % 5 ==0 && number % 3 ==0){
        console.log("3-5CLAP")
    }
    else if(number % 3 ==0){
        console.log("3CLAP")
    }
    else if(number % 5 ==0){
        console.log("5CLAP")
    }
}
checkNumber(15);
checkNumber(20);
checkNumber(12);

//nested if-else:
function checkGrade(score){
    let grade;
    if(score >= 90){
        grade ='A'
    }else{
        if(score >= 80){
        grade ='B'
        }
        else{
            if(score >= 70){
                grade ='C'
            }
            else grade ='D'
        }
    }
    console.log(grade);
}

checkGrade(100);
checkGrade(90);
checkGrade(75);
checkGrade(35);
checkGrade(85);

//
// let browser = "chrome";
// if( browser == "chrome"){
//     console.log("launch chrome");
// }
// if( browser == "edge"){
//     console.log("launch edge");
// }
// if( browser == "firefox"){
//     console.log("launch firefox");
// }
// else{
//     console.log("plz pass the right browser....");
// }

//if -elseif
let browser = "opera";
if( browser == "chrome"){
    console.log("launch chrome");
}
else if( browser == "edge"){
    console.log("launch edge");
}
else if( browser == "firefox"){
    console.log("launch firefox");
}
else{
    console.log("plz pass the right browser....");
}
