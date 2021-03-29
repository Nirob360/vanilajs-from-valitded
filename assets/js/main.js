
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confromPassword = document.getElementById('confirm_password');

// show error message 
function showError(input,message) {    
    const formControle = input.parentElement;
    formControle.className = ('error');
    const small = formControle.querySelector('small');
    small.innerText = message;
}
// show success message 

function showSuccess(input) {
    const formControle = input.parentElement;
    formControle.className = ('success');
}
// email validated 

function validateEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, ' Email is not valid ');
    }
}

// chekc required 
function checkRequird(inputArr) {
    
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input,`${getFildName(input)} is required `)
        } else {
            showSuccess(input)
        }
    })
}
// check input length 
function checkLength(input,min,max) {
    if (input.value.length < min) {
        showError(input, `${getFildName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFildName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
      }
  }

// get fild name 
function getFildName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check password 

function matchPassword(input1, input2) {
    if (input1.value !== input2.value) {        
        showError(input2, 'Password do not match');
    }
}

// Even listener 
form.addEventListener('submit',function (e){
    e.preventDefault();
    checkRequird([username,  email, password, confromPassword]);
    checkLength(username, 5, 12);
    checkLength(password, 6, 25);
    validateEmail(email);
    matchPassword(password, confromPassword);
    
});