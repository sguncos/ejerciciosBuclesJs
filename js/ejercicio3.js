/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/


let resultado = "";
let i = 0;
let palabra = prompt("Ingrese un palabra:");
resultado = resultado + palabra;
while (i == 0) {
    let z = confirm("Desea ingresar otra palabra?");
    if (z == true) {
        let palabra2 = prompt("Ingrese otra palabra: ");
        resultado = resultado + " - " + palabra2;
    } else {
        document.write("Las palabras ingresadas son: " + resultado);
        z = false;
        i++;
    }
}