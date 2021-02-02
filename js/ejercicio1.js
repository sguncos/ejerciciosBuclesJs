/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

let conductor = 1;

while (conductor == 1) {
    let edad = prompt("Ingrese su edad:");
    if (isNaN(edad)) {
        alert("el valor ingresado no es correcto, por favor ingrese nuevamente su edad");
    } else if (edad >= 18 && edad <= 90) {
        document.write("El usuario ya puede conducir");
        conductor++;
    } else {
        document.write("El usuario no tiene edad para conducir");
        conductor++;
    }
}