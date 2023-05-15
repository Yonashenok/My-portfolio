const hamburgerMenu = document.querySelector('.menu_section');
const logoCross = document.querySelector('.crossSign');
const logoHem = document.querySelector('.hamburgermenu');
const navBar = document.querySelector('.menu_m');
const logo = document.querySelector('.navLogo');
const navMenus = document.querySelectorAll('.close-menu');

const toggleMenuHandler = (event) => {
  event.preventDefault();
  logoCross.classList.toggle('hidden');
  logoHem.classList.toggle('hidden');
  navBar.classList.toggle('hidden');
  logo.classList.toggle('hidden');
};

const scrollHandler = (event) => {
  event.preventDefault();
  if (event.target.classList.contains('close-menu')) {
    const id = event.target.getAttribute('href');
    document
      .querySelector(id)
      .scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  }
};

hamburgerMenu.addEventListener('click', toggleMenuHandler);

navMenus.forEach((menu) => {
  menu.addEventListener('click', toggleMenuHandler);
});

navMenus.forEach((menu) => {
  menu.addEventListener('click', scrollHandler);
});
