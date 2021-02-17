/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numero = parseInt(prompt("Por favor ingrese un numero"));
if (numero <= 50) {
    for (let i = 1; i <= numero; i++) {
        let piramide2 = "";
        for (let j = 1; j <= i; j++) {
            piramide2 += j;
        }
        document.write("<br>" + piramide2);
    }
} else {
    alert("El número ingresado no es correcto");
}