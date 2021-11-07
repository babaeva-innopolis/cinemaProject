const popup = document.getElementById("prize-popup");
const openBtn = document.getElementById("popupOpen");
const closeBtn = document.getElementById("popupExit");
const nameField = document.querySelector("#prize-popup input[name='name']").parentNode;
const emailField = document.querySelector("#prize-popup input[name='email']").parentNode;

console.log(nameField, emailField);

function popupToggle(){
    popup.classList.toggle("hidden");
}
function initializeForm(field){
const input = field.getElementsByTagName("input")[0];

input.value = "";

}
initializeForm(nameField);
initializeForm(emailField);

openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;
