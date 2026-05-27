function checkDayOfWeek(dayNumber){
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

console.log(checkDayOfWeek(4));
console.log(checkDayOfWeek(3));
console.log(checkDayOfWeek(6));
console.log(checkDayOfWeek(10));

let browser = "chrome";
switch (browser) {
    case "chrome":
        console.log("Launching chrome");
        break;
    case "firefox":
        console.log("Launching firefox");
        break;  
    case "edge":
        console.log("Launching edge");
        break;      

    default:
        console.log("plz pass the right browser...." + browser);
        break;
}

