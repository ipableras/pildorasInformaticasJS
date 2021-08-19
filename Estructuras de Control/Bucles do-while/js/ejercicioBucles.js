
/*
function examen(){
    return Math.floor(Math.random() * (100 - 0) + 0);
}
*/
//console.log(`La pregunta del examen es: ${examen()}`);
//let numeroCreado = document.write(`La pregunta del examen es: ${parseInt(examen())}`);

//let numeroSecreto = Math.floor(Math.random() * (10 - 0) + 0); //0
let numeroSecreto = parseInt(Math.random() * 100);
let numeroUsuario;
let intentos = 0;

//document.write("\n\r"); // Mal
//document.write("</br>"); // Mal
document.write("<br>");
document.write("<h2>Antes del do-while</h2>");


do{

    numeroUsuario = prompt("Introduce el numero correcto: ");

    if(numeroUsuario > numeroSecreto){
        alert("El número Secreto es MENOR");
        //alert("El número es más bajo")
    }
    if(numeroUsuario < numeroSecreto){
        alert("El número Secreto es MAYOR");
    }

    intentos++;
      
}while(numeroUsuario != numeroSecreto);

document.write(`Correcto!. Lo has adiminado en: ${intentos}. El número encontrado fue: ${numeroUsuario}`);

