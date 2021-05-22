const menu = document.getElementById('menu')
const navlist = document.getElementById('navlist')
const navbar = document.getElementById('navbar')
const loader = document.getElementById('loader')

const procard = document.querySelectorAll('.pro-card')
const modalbg = document.querySelectorAll('.modal-bg')
const closebtn = document.querySelectorAll('.modal-close')

menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    navlist.classList.toggle('active')
})


for (let i = 0; i < procard.length; i++) {
    procard[i].addEventListener('click', () => {
        modalbg[i].classList.add('active')
    })
}

for (let i = 0; i < closebtn.length; i++) {
    closebtn[i].addEventListener('click', () => {
        modalbg[i].classList.remove('active')
    })
}

for (let i = 0; i < modalbg.length; i++) {
    modalbg[i].addEventListener('click', () => {
        modalbg[i].classList.remove('active')
    })
}


window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', window.scrollY > 0)
})

window.addEventListener('load', () => {
    loader.style.display = "none"
})