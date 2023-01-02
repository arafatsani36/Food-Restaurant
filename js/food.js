
let menu = document.querySelector('#nav-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll =() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

function load(){
    document.querySelector('.load-contanier').classList.add('fade-out');
}

function fadeOut(){
    setInterval(load , 3000);
}
window.onload = fadeOut();

