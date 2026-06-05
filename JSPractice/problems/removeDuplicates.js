const array=[1,1,1,1,2,2,2,6,6,6,6,8,9,9,9,0,0];
const newarray = [... new Set(array)];
console.log(newarray);

const names = ["Naveen", "Tom", "Lisa", "Naveen", "Peter", "Tom", "Raj", "Robby", "Tom"];
const newNames = [... new Set(names)];
console.log(newNames);
