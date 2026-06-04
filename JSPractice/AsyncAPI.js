const fs = require('fs');
const data=fs.readFile("notes.txt","utf8",(err, data) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
// utf8 -encoding, Node automatically converts the Buffer 
// into a string before passing it to the callback.
});

console.log("bye Shilpa");
