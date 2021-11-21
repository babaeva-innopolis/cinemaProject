const prizeForm = document.getElementById('prize-popup');
const openBtn = document.querySelector('#popupOpen');
const closeBtn = document.querySelector('#popupExit');
const nameInputWrapper = document.querySelector('#prize-popup input[name="name"]').parentNode;
const emailInputWrapper = document.querySelector('#prize-popup input[name="email"]').parentNode;





const INPUT_ERROR_CLASS = 'popup__label-empty';
const INPUT_FOCUS_CLASS = 'popup__label-filled';


function popupToggle(){
    prizeForm.classList.toggle('hidden');
    
};

function initializeField(field){
    const input = field.getElementsByTagName('input')[0];
    const errorText = field.querySelector('.st-input1__error-msg');
    clearError();
    field.classList.remove(INPUT_FOCUS_CLASS);
    input.value = '';

    function clearError() {
        field.classList.remove(INPUT_ERROR_CLASS);
        errorText.innerText = '';
    }

    input.addEventListener('focus', function(){
        field.classList.add(INPUT_FOCUS_CLASS);
    });
    input.addEventListener('input', clearError);

    input.addEventListener('blur', function(){
        if (!input.value){
            field.classList.remove(INPUT_FOCUS_CLASS);
        }

    });

    
    

    return {
        focus(){
        input.focus()
        },
         getValue(){
        return input.value
        },
        setError(error){
            errorText.innerText = error;
            field.classList.add(INPUT_ERROR_CLASS);
        

        }
    }

};
const nameField =  initializeField(nameInputWrapper);
const emailField =  initializeField(emailInputWrapper);

openBtn.onclick = function (){

    popupToggle();
    nameField.focus();
};

closeBtn.onclick = popupToggle;

prizeForm.addEventListener('submit', function(event){

    event.preventDefault();

    const nameValue = nameField.getValue();
    const emailValue = emailField.getValue();

    const prizeSelect = document.querySelector('#prize');
    const checkbox = document.getElementById("checkbox-prize");
     

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
        return
    }
    
    
    const data = {
        name: nameValue,
        email: emailValue,
        prize: prizeSelect.value,
    }
    const url = new URL ('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search = new URLSearchParams(data).toString();
     if (checkbox.checked) {
            fetch(url.toString());
    }
    
});

        
    
   

    

