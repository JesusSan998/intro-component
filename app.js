const firstName = document.querySelector('#input-firstName');
const lastName = document.querySelector('#input-lastName');
const email = document.querySelector('#input-email');
const password = document.querySelector('#input-password');

const firstNameError = document.querySelector('#firstName-error');
const lastNameError = document.querySelector('#lastName-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');

const sub = document.querySelector('#input-submit');

sub.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name cannot be empty');
    validateEmail(email.value, email, emailError);
    validateEmpty(password.value, password, passwordError, 'Password cannot be empty');
});

function validateEmail(valueInput, divInput, divError){
    let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(re.test(valueInput) == true){
        hideError(divInput, divError);
    }else{
        showError(divInput, divError, 'Looks like this is not an email');
    }
}

function validateEmpty(valueInput, divInput, divError, nameInput){
    if(valueInput == 0){
        showError(divInput, divError, nameInput);
    }else{
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, error){
    divInput.style.border = '1px solid red';
    divError.innerHTML = `<img src="images/icon-error.svg" alt="error" class="form__icon"><p class="form__paragraph">${error}</p>`;
}

function hideError(divInput, divError){
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = '';
}