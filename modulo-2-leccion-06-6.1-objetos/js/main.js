"use strict";

//Ejercicio 1. BIO DE ADALABERS

const adalaberDescription = document.querySelector(".js_adalaber");

const adalaber1 =  {
    name : "Susana",
    age : "34 años",
    job : "periodista",

    // Ejercicio 2. AÑADE UN MÉTODO RUN. 

    run : function () {
      console.log("estoy corriendo");
    },
    };


const adalaber2 = {
    name: "Vero",
    age: "27 años",
    job: "trabajadora social",

    // 2.2 Función con parámetro dentro de un obejto 
    runAMarathon : function (distance) {
      return `Estoy corriendo un maratón de ${distance} kilómetros`
    }
};


adalaberDescription.innerHTML += `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}.`
adalaberDescription.innerHTML += ` Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.job}`


// Ejercicio 2. Muestra en la consola "estoy corriendo", llamamos a ejecutar el método de forma literal. 

adalaber1.run();

// console.log(adalaber2.run()); De esta manera también estamos llamando al método pero me devuelve undefined


// 2.2 Pasar argumento al parámetro distance:
console.log(adalaber2.runAMarathon("50"));

