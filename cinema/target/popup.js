"use strict";

var prizeForm = document.getElementById('prize-popup');
var openBtn = document.querySelector('#popupOpen');
var closeBtn = document.querySelector('#popupExit');
var nameInputWrapper = document.querySelector('#prize-popup input[name="name"]').parentNode;
var emailInputWrapper = document.querySelector('#prize-popup input[name="email"]').parentNode;
var INPUT_ERROR_CLASS = 'popup__label-empty';
var INPUT_FOCUS_CLASS = 'popup__label-filled';

function popupToggle() {
  prizeForm.classList.toggle('hidden');
}

;

function initializeField(field) {
  var input = field.getElementsByTagName('input')[0];
  var errorText = field.querySelector('.st-input1__error-msg');
  clearError();
  field.classList.remove(INPUT_FOCUS_CLASS);
  input.value = '';

  function clearError() {
    field.classList.remove(INPUT_ERROR_CLASS);
    errorText.innerText = '';
  }

  input.addEventListener('focus', function () {
    field.classList.add(INPUT_FOCUS_CLASS);
  });
  input.addEventListener('input', clearError);
  input.addEventListener('blur', function () {
    if (!input.value) {
      field.classList.remove(INPUT_FOCUS_CLASS);
    }
  });
  return {
    focus: function focus() {
      input.focus();
    },
    getValue: function getValue() {
      return input.value;
    },
    setError: function setError(error) {
      errorText.innerText = error;
      field.classList.add(INPUT_ERROR_CLASS);
    }
  };
}

;
var nameField = initializeField(nameInputWrapper);
var emailField = initializeField(emailInputWrapper);

openBtn.onclick = function () {
  popupToggle();
  nameField.focus();
};

closeBtn.onclick = popupToggle;
prizeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var nameValue = nameField.getValue();
  var emailValue = emailField.getValue();
  var prizeSelect = document.querySelector('#prize');
  var checkbox = document.getElementById("checkbox-prize");

  if (!nameValue) {
    nameField.setError('Поле обязательно для заполнения');
    nameField.focus();
    return;
  }

  if (!emailValue) {
    emailField.setError('Поле обязательно для заполнения');
    emailField.focus();
    return;
  }

  if (prizeSelect.value === 'none') {
    prizeSelect.classList.add(INPUT_ERROR_CLASS);
    return;
  }

  var data = {
    name: nameValue,
    email: emailValue,
    prize: prizeSelect.value
  };
  var url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();

  if (checkbox.checked) {
    fetch(url.toString());
  }
});
//# sourceMappingURL=popup.js.map