let yourName = document.getElementById('yourName');
let email = document.getElementById('yourEmail');
let password = document.getElementById('yourPassword');
let signUp = document.getElementById('signUpBtn');
let err = document.getElementById('error')
let arr;

let myCheckBox = document.getElementById('myCheckBox');
let yourPassword = document.getElementById('yourPassword');



if(localStorage.getItem('users') != null){
    arr = JSON.parse(localStorage.getItem('users'))
}
else{
    arr = [];
}


signUp.addEventListener('click', function(){

    if(validationName() && validationEmail() && validationPass()){
        for (let i = 0; i < arr.length; i++) {
            
            if (arr[i].email == email.value ) {
                err.innerHTML = 'email already exists'
                err.style.color = 'brown'
                return;
            }
            else{
                
            }
        }
        let user = {
            name:yourName.value,
            email:email.value,
            password:password.value
        }

        arr.push(user);
        // localStorage
        localStorage.setItem('users', JSON.stringify(arr))
        err.classList.remove('d-none');
        err.innerHTML = 'Success'
        err.style.color = 'yellowgreen'
        yourName.value = '';
        email.value = '';
        password.value = ''
        yourName.classList.remove('is-valid')
        email.classList.remove('is-valid')

        
    }
    
    else{
        error.classList.remove('d-none');
        error.innerHTML = 'All inputs is required'
        err.style.color = 'red'
    }
})


function validationName(){
    let x = yourName.value
    let regexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{2,}$/;
    if (regexName.test(x) == true) {
        yourName.classList.add('is-valid')
        yourName.classList.remove('is-invalid')
        return true;
    }
    else{
        yourName.classList.add('is-invalid')
        yourName.classList.remove('is-valid')
        return false;
    }
}


function validationEmail(){
    let y = email.value
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regexEmail.test(y) == true) {
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
        return true;
    }
    else{
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        return false;
    }
}


yourPassword.addEventListener('input', function (){
    let z = password.value;
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    if (regexPassword.test(z) == true) {
        passError.classList.add('d-none')
        return true;
    }
    else{
        passError.classList.remove('d-none')
        return false;
    }
})


function validationPass(){
    let z = password.value;
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    if (regexPassword.test(z) == true) {
        passError.classList.add('d-none')
        return true;
    }
    else{
        passError.classList.remove('d-none')
        return false;
    }
}


myCheckBox.addEventListener('click', function () {
    var yourPasswordValue = document.getElementById("yourPassword");
    if (yourPasswordValue.type === "password") {
        yourPasswordValue.type = "text";
    } else {
        yourPasswordValue.type = "password";
    }
}) 


password.addEventListener('input', function(){
    checkBox.classList.remove('d-none')
})