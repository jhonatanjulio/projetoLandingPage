const mobileMenu = document.querySelector('.mobile-menu');
const navBar = document.querySelector('.nav-bar');
const closeMenu = document.querySelector('.mobile-menu-fechar');
const activeClass = 'active';

mobileMenu.addEventListener("click", () => navBar.classList.toggle(activeClass));

closeMenu.addEventListener("click", () => navBar.classList.remove('active'));