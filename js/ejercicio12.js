/*12- Realiza un script que genere un número aleatorio entre 1 y 99*/


let rand = Math.floor(Math.random() * (99 - 1));
console.log(rand);
document.write(`El número aleatorio es ${rand}`);