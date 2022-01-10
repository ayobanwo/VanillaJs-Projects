const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function  showError(input, message) {
    const form = input.parentElement;
    form.className = 'form-control error';
    const small = form.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const form = input.parentElement;
    form.className = 'form-control success';
}

//Validate Email
function checkEmail(email) {
    if (String(email.value.trim())
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    ){
        showSuccess(email);
    } 
    else{
        showError(email, 'Email is not valid');
    }
}

//Check password match
function checkPasswordMatch(pass1, pass2) {
    if(pass1.value === pass2.value){
        showSuccess(pass1);
    }
    else{
        showError(pass2, 'Passwords do not match')
    }
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if(input.value.trim() === ''){
            showError(input, `${fieldName(input)} field required` )
        }
        else{
            showSuccess(input);
        }
    })
}

// Get field name
function fieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check lenght of field
function checkLength(input, min, max) {
    if(input.value.trim().length < min){
        showError(input, `${fieldName(input)} must be at least ${min} characters`)
    }
    else if (input.value.trim().length > max ){
        showError(input, `${fieldName(input)} must be less than ${max} characters`)
    }
    else{
        showSuccess(input);
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 20);
    checkEmail(email);
    checkPasswordMatch(password, password2);
})