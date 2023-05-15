const hamburgerMenu = document.querySelector('.menu_section');
const logoHem = document.querySelector('.hamburgermenu');
const logoCross = document.querySelector('.crossSign');
const navBar = document.querySelector('.menu_m');
const logo = document.querySelector('.navLogo');

const menuHandler = () => {
  logoCross.classList.toggle('hidden');
  logoHem.classList.toggle('hidden');
  navBar.classList.toggle('hidden');
  logo.classList.toggle('hidden');
};

hamburgerMenu.addEventListener('click', menuHandler);
