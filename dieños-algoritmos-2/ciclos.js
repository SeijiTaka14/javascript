/*
Ciclos = Bucles = Loops

while
do while
for

*/

//while
/*
let condicion = 1; - valor inicial
while(condicion){
    codigo
    modificacion a nuestro valor inicial
}
*/
/*
//imprimir todos los números del 1 - 10
let condicion = 1;{
    while(condicion <= 10)
    console.log(numero);
    condicion + 1;
     //hasta aquí se repite infinitamente
    

}
*/

/*
let numero = 1; //1
consooe.log(numero);
numero++; //2 es lo mismo que >= numero = numero + 1
console.log(numero);
*/



//do while
 let numero = 11;
 
 do {
     console.log(numero);
     numero++;
 } while (numero <= 10);

//for

for(let control = 1; control <= 10; control++){
    console.log(control);
}


const comidas = ['Pozole', 'Tacos', 'Tamales', 'Tortas'];

for(let i = 0; i < comidas.length; i++){
    console.log(comidas[i]);
}

