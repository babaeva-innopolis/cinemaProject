"use strict";

var prizeForm = document.getElementById("prize-popup");
var openBtn = document.getElementById("popupOpen");
var closeBtn = document.getElementById("popupExit");
var nameInputWrapper = document.querySelector("#prize-popup input[name='name']").parentNode;
var emailInputWrapper = document.querySelector("#prize-popup input[name='email']").parentNode;
console.log(nameInputWrapper, emailInputWrapper);

function popupToggle() {
  prizeForm.classList.toggle("hidden");
}

function initializeField(field) {
  var input = field.getElementsByTagName("input")[0];
  var errorText = field.querySelector('st-input1__error-msg');
  input.value = '';
  errorText.innerText = '';
}

initializeField(nameInputWrapper);
initializeField(emailInputWrapper);
openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;