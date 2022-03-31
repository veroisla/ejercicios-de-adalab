'use strict';

// //AÑADIR
// const isla = ['vero', 'dani', 'india'];
// isla.push('abi');

// //QUITAR ÚLTIMO ELEMENTO
// isla.pop('');
// console.log(isla);

// //CAMBIAR ORDEN
// isla.reverse('');
// console.log(isla);

// //COCATENER ARRAYS (CREA UNO NUEVO)

// const plants = ['cerezo', 'pino', 'abedul'];

// const newArray = isla.concat(plants);
// console.log(newArray);

// //SLICE (devuelve lo que está entre esas posiciones, pero no incluye la posición final, el segundo parámetro)

// const names = ['VERO', 'Rita', 'María', 'PACO', 'Lucía', 'Ana', 'Vanesa'];
// console.log(names.slice(0, 5));

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// const index = months.indexOf('verano');
// console.log(index);

/*EJERCICIO 1. NUMERITOS

Vamos a crear una función get100Numbers que devuelve un array con los números del 1 al 100. 
Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos.
 Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden.*/

const numbers = [];

for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}

function get100Numbers() {
  return numbers;
}

get100Numbers();
console.log(get100Numbers());

//1. Creo una constante numbers con array vacío
//2. Creo bucle for, cuyo código a ejecutar, es ir añadiendo a la constante numbers el valor de i. (CON PUSH)
//3. La función me retorna el valor de la constante numbers (array vacío)
//4. Ejecuto la función y la imprimo en la consola.

/*EJERCICIO 2. SOTIREMUN

Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.*/

// function getReversed100Numbers() {
//   const get100 = get100Numbers();
//   const reverse = get100.reverse();
// }

// getReversed100Numbers();
// console.log(getReversed100Numbers());
// console.log(reverse);
