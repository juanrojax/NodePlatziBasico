const call = require("./src/call");

console.log(call.sync("Diego"));


call.withCallback("Diego",call.sync);

call.withPromise("JuanDi")
    .then(name=>{console.log(name)})
