let email = document.getElementById('yourEmail');
let password = document.getElementById('yourPassword');
let login = document.getElementById('loginBtn');
let error = document.getElementById('error');
let yourPassword = document.getElementById('yourPassword')
let myCheckBox =  document.getElementById('myCheckBox')


let x = JSON.parse(localStorage.getItem('users'));


login.addEventListener('click', function(){
    
    for(let i = 0 ; i < x.length; i++){
        if(x[i].email == email.value && x[i].password == password.value){
            localStorage.setItem('userName', x[i].name )
            window.location = './home.html'
        }
        else if (email.value == '' && password.value == '') {
            error.classList.remove('d-none')
        }
        else{
            error.classList.remove('d-none')
            error.innerHTML = 'incorrect email or password'
        }
    }
})


let goToSignUp = document.getElementById('goToSignUp');

goToSignUp.addEventListener('click', function(){
    window.location = '../html/signUp.html'
})


yourPassword.addEventListener('input', function(){
    myCheckBox.classList.remove('d-none')
})


myCheckBox.addEventListener('click', function () {
    var yourPasswordValue = document.getElementById("yourPassword");
    if (yourPasswordValue.type === "password") {
        yourPasswordValue.type = "text";
    } else {
        yourPasswordValue.type = "password";
    }
}) 