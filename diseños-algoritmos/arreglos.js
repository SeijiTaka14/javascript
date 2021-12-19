/*
Colección de elementos 
Tienen métodos o funciones que nos permiten ordenar o
manipular los datos almacenados
*/

//manera 1 
const arreglo1 = [4, 'hola', true, [1, 2, 6]];
console.log(arreglo1);

// manera 2
const arreglo2 = Array.of(1, 'Hola', true);
console.log(arreglo2);

//manera 3 
const arreglo3 = new Array(3, true, 'adiós');
console.log(arreglo3);

const frutas = ['manzana', 'naranja', 'uvas', 
'sandias', [1, 2, 3, 4, 5, ['A', 'B', 'C']]];
//notación de corchetes
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4][4]);
console.log(frutas[4][5][1]);
console.log(frutas);

//Métodos
/*
length nos dice la longitud de nuestro array / arreglo
*/

const letras = ['A', 'B', 'C', 'D'];
console.log(letras.length);

/* Push, añade un elemnto al final de nuestro arreglo */
letras.push('E');
console.log(letras);

/* pop = elimina el último elemnto del arreglo */
letras.pop();
console.log(letras);

/* unshift = agrega un elemento al inicio de nuestro arreglo */

letras.unshift(1);
console.log(letras);

/* shift = elimina el primer elemento de nuestro arreglo */
letras.shift();
console.log(letras);
