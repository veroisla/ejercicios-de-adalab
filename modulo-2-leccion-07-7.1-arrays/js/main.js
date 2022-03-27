"use strict";

// Ejercicio 1. PELÍCULAS


function workWithMovies () {

  const movies = [
    "In to the wild",
    "El castillo de cristal",
    "Avatar"
];
  
 //Añadir película en posición 3. 

 movies[3] = "Caperucita roja";

 //Modificar película, en posición 1
 movies[1]= "Viajando a granada";

};

console.log(workWithMovies.movies);

//* Se muestra en la consola pero TODO, cuando no estaba dentro de la función solo se mostraban las películas. 
