"use strict";

// 1. INFORMACIÓN INSTANTÁNEA

const input = document.querySelector(".js-input");
const letter = document.querySelector(".js-letter");

input.addEventListener("click", () => {
letter.innerHTML += (event.currentTarget);
});
//**No consigo que salga lo que escribo


// 2. MÁS BOTONES

const button1 = document.querySelector(".js-button1");
const button2 = document.querySelector(".js-button2");

button1.addEventListener("click", () => {
    const button1 = event.currentTarget;
    button1.classList.toggle("color");
});

button2.addEventListener("click", () => {
    const button2 = event.currentTarget;
    button2.classList.toggle("color");
});

    //PASOS:
    // 1. Declaramos constantes para los elementos. 
    // 2. Añadimos listener al botón
    // 3. Decimos a que elemento queremos que se aplique el cambio (target)
    // 4. Añadimos la clase que está en el css
    //* No sé si está bien del todo!!