const prizeForm = document.getElementById("prize-popup");
const openBtn = document.getElementById("popupOpen");
const closeBtn = document.getElementById("popupExit");
const nameInputWrapper = document.querySelector("#prize-popup input[name='name']").parentNode;
const emailInputWrapper = document.querySelector("#prize-popup input[name='email']").parentNode;

console.log(nameInputWrapper, emailInputWrapper);

function popupToggle(){
    prizeForm.classList.toggle("hidden");
}
function initializeField(field){
const input = field.getElementsByTagName("input")[0];
const errorText = field.querySelector('st-input1__error-msg');
input.value = '';
errorText.innerText = '';

}
initializeField(nameInputWrapper);
initializeField(emailInputWrapper);

openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;
