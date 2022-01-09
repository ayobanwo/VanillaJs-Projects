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
function validEmail(email) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ); 
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value === ''){
        showError(username, 'Username required');
    }else{
        showSuccess(username)
    }
    if(email.value === ''){
        showError(email, 'Email required');
    }else if(!validEmail(email.value)){
        showError(email, 'Email is not valid');
    }
    else{
        showSuccess(email)
    }
    if(password.value === ''){
        showError(password, 'Password required');
    }else{
        showSuccess(password)
    }
    if(password2.value === ''){
        showError(password2, 'Password required');
    }else{
        showSuccess(password2)
    }
})