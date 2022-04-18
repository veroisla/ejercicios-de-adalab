'use strict';

const nameInput = document.querySelector('.js_input');
const nameP = document.querySelector('.js_paragraph');

function handleKeyUp() {
  nameP.innerHTML = nameInput.value;
  localStorage.setItem('name', nameInput.value);
}

function recharged() {
    if()
}
nameInput.addEventListener('keyup', handleKeyUp);
