console.log("JavaScript".length);
let str = "Naveen";
console.log(str.length);

console.log("JavaScript"[2]);//v
console.log("-----");
console.log("JavaScript".charAt(5));//c
console.log("JavaScript".charAt(20));//nothiung will displaz
console.log("-----");


console.log("JavaScript".charCodeAt(2));
//a-z: 97 to 122

console.log("JavaScript".toLowerCase());
console.log("JavaScript".toUpperCase());

console.log("JavaScript".slice(2,-5));//vaS(2to5)
// JavaScript
// 0123456789
// -5-4-3-2-1. backword also index
//c=-5 and 5. && //t=9 and -1

console.log("JavaScript".substring(2,6));//vaSc
console.log("JavaScript".substring(-2,2));//-ve converts 0--> Ja
//In JS substring will convert the -ve index to zero
//In slicing +ve index go left to right direction &
//-ve go right to left direction 

console.log("Shilpa".concat(" Software ").concat("Engineer"));

let lang = "Java_JavaScript_Python";
let arr = lang.split("_");
console.log(arr[0]);
console.log(arr[2]);

console.log("JavaScript".includes("Java"));
console.log("JavaScript".includes("Hello"));


console.log("Dev Test Framework Dev".replace("Dev", "JS"));//JS Test Framework Dev
console.log("Dev Test Framework Dev".replaceAll("Dev", "JS"));//JS Test Framework JS

console.log("01-01-1990".replaceAll("-", "/")); 

console.log("  hello js  ".trim());
console.log("  hello js  ".trimStart());
console.log("  hello js  ".trimEnd());

console.log("Dev".padEnd(10,"*"));//Dev*******
console.log("Dev".padStart(10,"-"));//*******Dev

console.log("Javascript".startsWith("J"));
console.log("Java script".endsWith("script"));

console.log("dev".repeat(3));

console.log("Naveen Automation Labs".indexOf("Automation"));//7
console.log("Naveen Automation Labs".indexOf("N"));
console.log("Naveen Automation Labs".indexOf("JS"));

console.log("Naveen Automation Labs Naveen".indexOf("Naveen"));
console.log("Naveen Automation Labs Naveen".lastIndexOf("Naveen"));

console.log("Naveen Automation Labs".search("Automation"));//7
