/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/


let dni = parseInt(prompt("Ingrese su numero de DNI"));
if (dni >= 0 && dni <= 99999999) {
    let resultado = dni % 23;
    console.log(resultado);
    switch (resultado) {
        case 0:
            resultado = "T";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 1:
            resultado = "R";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 2:
            resultado = "W";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 3:
            resultado = "A";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 4:
            resultado = "G";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 5:
            resultado = "M";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 6:
            resultado = "Y";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 7:
            resultado = "F";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 8:
            resultado = "P";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 9:
            resultado = "D";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 10:
            resultado = "X";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 11:
            resultado = "B";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 12:
            resultado = "N";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 13:
            resultado = "J";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 14:
            resultado = "Z";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 15:
            resultado = "S";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 16:
            resultado = "Q";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 17:
            resultado = "V";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 18:
            resultado = "H";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 19:
            resultado = "L";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 20:
            resultado = "C";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 21:
            resultado = "K";
            document.write("le corresponde la letra: " + resultado);
            break;
        case 22:
            resultado = "E";
            document.write("le corresponde la letra: " + resultado);
            break;
        default:
            alert("El dni ingresado es incorrecto");

    }
} else {
    alert("el DNI ingresado es incorrecto")

}