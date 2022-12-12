
const botaoMenu = document.querySelector(".header-menu")
const menu = document.querySelector(".navbar")

botaoMenu.addEventListener('click', () =>{
  menu.classList.toggle("navbar-menu--ativo")
}
)