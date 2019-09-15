const fs = require("fs")
const ops = require("./src/fileops");

let incValue;

fs.readFile("nodejsbasico/resources/number.txt","utf8", (err,text)=>{
    if(err) throw err;
    const numbers = text.split("\n").map(n=>Number(n));
    console.log(numbers);
    console.log(ops.incrementValues(numbers))
    incValue = ops.incrementValues(numbers)

    fs.writeFile("nodejsbasico/resources/numbernew.txt", incValue.join("\n"),(err,result)=>{
        if(err) throw err;
    })
});

