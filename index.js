const hamburgerMenu = document.querySelector('.menu_section');
const navMenus = document.querySelectorAll('.close-menu');
const logoHem = document.querySelector('.hamburgermenu');
const navBar = document.querySelector('.menu_m');
const logo = document.querySelector('.navLogo');
const popups = document.querySelector('.popup');
const showPopups = document.querySelector('.show-project');
const logoCross = document.querySelector('.crossSign');

const projectData = [
  {
    id: 1,
    title: 'Multi-Post Stories',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    techStack: { tech1: 'HTML', tech2: 'Bootstrap', tech3: 'Ruby on rails' },
    img: '',
    link: '',
  },
  {
    id: 2,
    title: 'Professional Art Printing Data',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    techStack: { tech1: 'HTML', tech2: 'Bootstrap', tech3: 'Ruby on rails' },
    img: '',
    link: '',
  },
  {
    id: 3,
    title: 'Professional Art Printing Data',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    techStack: { tech1: 'HTML', tech2: 'Bootstrap', tech3: 'Ruby on rails' },
    img: '',
    link: '',
  },
  {
    id: 4,
    title: 'Professional Art Printing Data',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    techStack: { tech1: 'HTML', tech2: 'Bootstrap', tech3: 'Ruby on rails' },
    img: '',
    link: '',
  },
  {
    id: 5,
    title: 'Professional Art Printing Data',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    techStack: { tech1: 'HTML', tech2: 'Bootstrap', tech3: 'Ruby on rails' },
    img: '',
    link: '',
  },
  {
    id: 6,
    title: 'Professional Art Printing Data',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    techStack: { tech1: 'HTML', tech2: 'Bootstrap', tech3: 'Ruby on rails' },
    img: '',
    link: '',
  },
];

const toggleMenuHandler = (event) => {
  event.preventDefault();
  logoCross.classList.toggle('hidden-g');
  logoHem.classList.toggle('hidden-g');
  navBar.classList.toggle('hidden-g');
  logo.classList.toggle('hidden-g');
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

const renderPopUp = (e) => {
  e.preventDefault();

  const markUp = `
  <h2>Multi-Post Stories</h2>
        <ul class="skills-lan flex-row">
          <li><a class="tag" href="#">HTML</a></li>
          <li><a class="tag" href="#">Bootstrap</a></li>
          <li><a class="tag" href="#">Ruby on rails</a></li>
        </ul>
        <div class="bg-img"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque
          dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at
          repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur
          debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil
          minima, sunt culpa alias odio magnam numquam, eius id qui? Repudiandae
          numquam beatae magnam?
        </p>
        <ul class="popup-btn flex-row">
          <li class="flex-row popup-cont">
            <a href="#">See live</a>
            <img
              class="popup-icon"
              src="./style/imgs/Icon.png"
              alt="live-share-icon"
            />
          </li>
          <li class="flex-row popup-cont">
            <a href="#">See source</a>
            <img
              class="popup-icon"
              src="./style/imgs/Group.png"
              alt="source code to github"
            />
          </li>
      </ul>`;
  popups.insertAdjacentHTML('afterbegin', markUp);
};
showPopups.forEach((btn) => {
  btn.addEventListener('click', renderPopUp);
});
hamburgerMenu.addEventListener('click', toggleMenuHandler);

navMenus.forEach((menu) => {
  menu.addEventListener('click', toggleMenuHandler);
});

navMenus.forEach((menu) => {
  menu.addEventListener('click', scrollHandler);
});
