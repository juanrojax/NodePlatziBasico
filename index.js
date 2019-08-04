const math = require('./math');
const greet = require('./greetings');
const hello = require('./greetings/hello');

console.log(math.add(1,2));
console.log(math.divide(4,2));
console.log(math.multiply(1,2));
console.log(math.substract(1,2));

//Ctrl f5 consola de depuracion

console.log(greet.greet("JuanDi"));
console.log(hello.sayHello("Juan Di"));



