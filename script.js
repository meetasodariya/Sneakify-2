const menu = document.querySelector('.menu');
const navbar  = document.querySelector('.navbar-container')

menu.addEventListener('click',()=>{
    menu.classList.toggle('change')
    navbar.classList.toggle('change')
})
