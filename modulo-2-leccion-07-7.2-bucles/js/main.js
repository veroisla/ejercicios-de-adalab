"use strict";

// Ejercicio 1. VOY POR LA VUELTA 10

for ( let i = 1 ; i <= 10 ; i++ ) {

    console.log("Voy por la vuelta " + i)
};


//Ejercicio 2. CONTANDO DE DOS EN DOS

let acc = 0;

for ( acc ; acc <= 10 ; acc += 2) {
    console.log ("El resultado es " + acc)

};

/*Declaro una variable acc con valor 0, en el bucle inicio con acc (0) ; la condición (hasta 10), y la actualización que sume a acc+2 en cada vuelta. */


// Ejercicio 5. TENEMOS MUCHO EN COMÚN

const movie1 = document.querySelector(".js_movie1");
const movie2 = document.querySelector(".js_movie2");
const button = document.querySelector(".js_button");
const meToo = document.querySelector(".js_meToo");

const pelicula = movie1.value;

for (const movie of pelicula) {
    console.log (`"A mi tambie me encanto ${movie1} tenemos mucho en común" `)
};


 button.addEventListener('click' , movie1);