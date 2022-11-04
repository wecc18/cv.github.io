const menu=document.querySelector(".menu");
const openMenu=document.querySelector(".open-menu");
const closeMenu=document.querySelector(".close-menu");

function verificarMenu(){
    menu.classList.toggle("menu-opened");
}

openMenu.addEventListener("click", verificarMenu);
closeMenu.addEventListener("click", verificarMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        menu.classList.remove("menu-opened");
    })
})