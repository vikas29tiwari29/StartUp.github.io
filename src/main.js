let openBtn=document.querySelector('.bi-list')
let closeBtn=document.querySelector('.bi-x-lg')
let navbar = document.querySelector('.navbar__menu')

openBtn.addEventListener('click',()=>{
    openBtn.classList.toggle('hide')
    closeBtn.classList.toggle('hide')
    navbar.classList.toggle('hidden')
})
closeBtn.addEventListener('click',()=>{
    openBtn.classList.toggle('hide')
    closeBtn.classList.toggle('hide')
    navbar.classList.toggle('hidden')
})


