/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */



let resultado = 0;

do {
    let numero = parseInt(prompt("Ingrese un numero"));
    console.log(numero);
    if (!isNaN(numero)) {
        resultado = resultado + numero;
        console.log("resultado" + resultado);
    } else {
        alert("El valor ingresado no es correcto");
    }
    z = confirm("desea ingresar otro numero?");
} while (z);

document.write("El total de los numero ingresados es: " + resultado);