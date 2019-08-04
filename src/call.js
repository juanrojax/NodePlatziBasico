module.exports = {
    greet: function(nombreCompleto) {
        console.log(`Hola ${nombreCompleto}! Sientes la asincronia?`);
    },
    withPromise: function(nombre, apellido) {
        console.log("Llamando función con promesa...");
        return new Promise((resolve, reject)=>{
            console.log("Ejecutando espera...");
            setTimeout(()=>{
                console.log("Resolviendo la espera!");
                resolve(`${nombre} ${apellido}`);
            }, 5000); 
        })
    },

    sumPromise: function(n1,n2){
        return new Promise((resolve,reject)=>{
            console.log("Vamo A Suma");
            setTimeout(()=>{
                resolve(n1+n2);
            },3000);
        })
    }
}