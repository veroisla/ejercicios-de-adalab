"use strict";

//Title//
const title = document.querySelector(".js-title");

title.innerHTML = "Introducción a la programación";

//Hola mundo//

const subTitle = document.querySelector(".js-subTitle");

subTitle.innerHTML = subTitle.innerHTML + " mundo";

//Seleccionando Adalabers (añadir palabra)//

const adalaber = document.querySelector(".js-adalaber");

adalaber.innerHTML += " Vero";

//Protege ese pasword (cambiar solo una palabra)//

const span = document.querySelector(".js-span");

span.innerHTML = " ****";

//Lorem Ipsum (añadir elementos nuevos)//

const article = document.querySelector(".js-article");

const content = '<h2>Crear árticulo desde JS</h2><img src="http://via.placeholder.com/350x150"><p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit".</p>'

article.innerHTML = content;

//1,2,3, responda otra vez//

const list = document.querySelector(".js-list");

const contentList = '<h3>Lista creada desde JS</h3><li>1</li><li>2</li><li>3</li>';

list.innerHTML = contentList;

//Deshabilitanto botones (poniendo  clase nueva a elemento)

const button2 = document.querySelector(".b2");

button2.classList.add("border");
