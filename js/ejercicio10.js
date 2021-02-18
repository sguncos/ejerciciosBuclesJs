/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 
*/
let fila = parseInt(prompt('Ingrese el número de filas:'));
let columna = parseInt(prompt('Ingrese el número de columnas:'));
let resul = fila * columna;
console.log(resul);

for (let i = 1; i <= fila; i++) {
    document.write(` <br> `);
    let final = "resul";
    for (let j = 1; j <= columna; j++) {
        final = resul--;
        document.write(`${final} - `);
    }

}