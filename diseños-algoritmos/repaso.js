/* CONDICIONALES

if(coondicion){
    bloque
} else if() {

} else {

}
*/

/* FUNCION
Bloque de código reutlizable

function nombre(parametros){
    return
}
nombre(argumentos);
*/

function procesadorDeFrutas(manzana, naranja){
    let jugo = 'Jugo de ' + manzana + ' manzanas y ' + naranja + ' naranjas.';
    return jugo; 
}

let jugoDeManzana =  procesadorDeFrutas(4,0);

document.write('<h1>' + jugoDeManzana + '<h1>');

let jugoDeNaranja = procesadorDeFrutas(0, 5);
document.write(jugoDeNaranja);


