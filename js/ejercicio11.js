/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

let rand = Math.random() * (99 - 1);
console.log(rand)


let edades = [];
let nombres = [];
for (let i = 0; i < 3; i++) {
    let edad = parseInt(prompt('Ingrese la edad del participante ' + i + ':'));
    let participante = (prompt('Ingrese el nombre del participante ' + i + ':'));
    edades[i] = edad;
    nombres[i] = participante;
    console.log(edades);
    console.log(nombres);
}
let mayor = Math.max(...edades);
console.log(`la edad mayor es ${mayor}`);
console.log(nombres.length);

for (let i = 0; i < nombres.length; i++) {
    if (edades[i] == mayor) {
        let nomMayor = nombres[i];
        document.write(`El mayor de los participantes es ${nomMayor} con ${mayor} años de edad.`);
    }
}