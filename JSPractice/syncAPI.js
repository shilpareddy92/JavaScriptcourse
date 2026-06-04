const fs = require('fs');
const data=fs.readFileSync("notes.txt");
//console.log(data);//without an encoding returns a Buffer: <Buffer 48 65 6c 6c 6f ...>
console.log(data.toString());

console.log("bye Shilpa");

