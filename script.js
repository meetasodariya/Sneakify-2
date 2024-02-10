const menu = document.querySelector('.menu-1');
const navbar  = document.querySelector('.navbar-main-container')

menu.addEventListener('click',()=>{
    menu.classList.toggle('change')
    navbar.classList.toggle('change')
})
