//EJERCICIO DE FUNCIONES

 let compra = parseInt(prompt('¿Cuál es el valor de su compra?'));

const x = 0.9
const y = 0.8
const z = 0.7
const v = 0.6

if(compra < 100){
    document.write('<h1>' + 'El valor de su compra antes de descuento: ' + compra + '<h1>') 
    let totaldecompra = compra * x;
    document.write('<h1>' + 'El total de su compra con el descuento del 10% es: ' + totaldecompra + '<h1>');
} else if(compra >= 100 && compra < 200){
    '<h1>' + 'El valor de su compra antes de descuento: ' + compra + '<h1>'
    let totaldecompra = compra * y;
    document.write('<h1>' + 'El total de su compra con el descuento del 20% es: ' + totaldecompra + '<h1>');
} else if(compra >= 200 && compra < 300){
    '<h1>' + 'El valor de su compra antes de descuento: ' + compra + '<h1>'
    let totaldecompra = compra * z;
    document.write('<h1>' + 'El total de su compra con el descuento del 30% es: ' + totaldecompra + '<h1>');
} else {
    document.write('<h1>' + 'El valor de su compra antes de descuento: ' + compra + '<h1>')
    let totaldecompra = compra * v;
    document.write('<h1>' + 'El total de su compra con el descuento del 40% es: ' + totaldecompra + '<h1>');
}


  







  