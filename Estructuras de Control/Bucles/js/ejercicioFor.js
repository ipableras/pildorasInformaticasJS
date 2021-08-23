
let factorial= parseInt(prompt(`Introducir el programa factorial elegido: `));

document.write("<h1>Calcular el factorial</h1>");
document.write(`<h2>Este es el factoria: ${factorial}!</h2>`);
/*
let numeroPorFactorial = 1;

for(let i = 1; i <= factorial; i++ ){
    numeroPorFactorial *= i;
    //console.log(factorial);
    document.write(numeroPorFactorial);
    document.write(i);
    if(i<factorial){
        document.write("->");
    }else{
        document.write(`=${factorial}!`);
    }
}
*/
let numeroPorFactorial;
for(numeroPorFactorial = factorial; factorial>1; factorial--){
    numeroPorFactorial *= factorial - 1; 
}

document.write(`<h2>Este es el factoria: ${numeroPorFactorial}</h2>`);
