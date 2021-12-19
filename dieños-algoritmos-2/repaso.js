/* 
Arreglos
*/

const comidas = ['Pozole', 'Quesadillas', 'Tacos'];

console.log(comidas.length);

/*
push, añade un elemento al final del arreglo 
pop, elimina el elemento final del arreglo
unshift, añade un elemento al principio del arreglo
shift, elimina el elemento al principio del arreglo
*/

comidas.push('Torta');
console.log(comidas);

comidas.unshift('Pancita');
console.log(comidas);

comidas.pop();
console.log(comidas);

comidas.shift();
console.log(comidas);

/*
forEach, nos puede servir para realizar una acción
por cada elemento de nuestro arreglo
*/

console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);

comidas.forEach(function(el){
    console.log(el);
})

const numeros = [1, 4, 7, 8];
console.log(numeros);

numeros.forEach(function(el){
    let suma = el +1;
    console.log(suma);
})
console.log(numeros);

//ejercicio
const arr = [];

function suma(num){
    let sumNum = num + 1;
    return arr.push(sumNum);
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);

console.log(arr);