const call = require("./src/call");

call.greet("Juan DIego Rojas Valecnia");


async function callWithPromise(){
    const FullName = await call.withPromise("JuanDi","Rojas")
    console.log(FullName);
}

callWithPromise();

async function suma(){
    const Sumar = await call.sumPromise(2,2)
    console.log(Sumar)
}

suma();

/* call.withPromise("JuanDi","Rojas")
        .then(n=>{console.log(n)}) */
