let back = document.getElementById('logOutBtn');
let welcome = document.getElementById('welcome')


back.onclick = function BackToIndex(){
    window.location = 'index.html'
}



if(localStorage.getItem('users') != null){
    welcome.innerHTML = `Welcome ${localStorage.getItem('userName')}`
}



