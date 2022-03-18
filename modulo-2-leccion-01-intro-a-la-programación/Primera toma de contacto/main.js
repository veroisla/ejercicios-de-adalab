"use strict";
document.querySelector("h1").innerHTML = "¡Hola mundo!";

document.querySelector("h2").innerHTML="Esta es una página con conceptos de JS";

/*Reasignar valor a la variable*/

let veroAdress = "calle de la alondra";
veroAdress = "calle del colibrí";



/*Modificar contenido de una tiqueta html*/

const myName = document.querySelector(".mistake"); /*selector de clase*/
myName.innerHTML = "Me llamo Verónica"; /*Utilizamos innerHTML, para modificar el elemento*/


const myAge = document.querySelector(".mistake2");
myAge.innerHTML = "Tengo 26 años";


/*Añadir contenido al elemento HTML, ejercicio 3*/

const helloWorld = document.querySelector(".helloWorld");
helloWorld.innerHTML = helloWorld.innerHTML + " adalaber";



/*Seleccionando Adalabers, ejercicio 4*/

const selectedAdalaber = document.querySelector(".adalaber");
selectedAdalaber.innerHTML = selectedAdalaber.innerHTML + " Vero";



/*Protege ese password, ejercicio 5*/

const myPassword = document.querySelector(".password");
myPassword.innerHTML = "Mi contraseña es: ******";




/*Ejemplo de meter html dentro de html desde JS*/

const listElement = document.querySelector(".list");

const content = '<li><a href="#">Home</a></li><li><a href="#">Contact</a></li>';

listElement.innerHTML = content;



/*Lorem Ipsum, ejercicio 6, html dentro de html*/

const div = document.querySelector(".lorem");

const article = '<h2>Lorem Ipsum</h2><img src="http://via.placeholder.com/350x150"/><p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit"</p>';

div.innerHTML = article;



/*Modificar clases, añadir y quitar*/

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");


button1.classList.add("oppacity"); /*añadimos clase*/

button2.classList.remove("background-color"); /*quitamos clase*/

