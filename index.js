const hamburgerMenu = document.querySelector('.menu_section');
const navMenus = document.querySelectorAll('.close-menu');
const logoHem = document.querySelector('.hamburgermenu');
const navBar = document.querySelector('.menu_m');
const logo = document.querySelector('.navLogo');
const popups = document.querySelector('.popup');
const overly = document.querySelector('.overly');
const showPopups = document.querySelectorAll('.show-project');
const logoCross = document.querySelector('.crossSign');

let closePopUp;
const projectData = [
  {
    id: '1',
    title: 'Multi-Post Stories',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    techStack: { tech1: 'HTML', tech2: 'Bootstrap', tech3: 'Ruby on rails' },
    img: './style/imgs/Snapshoot_mobile.png',
    link: '',
  },
  {
    id: '2',
    title: 'Professional Art Printing Data',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    techStack: { tech1: 'HTML', tech2: 'Bootstrap', tech3: 'Ruby on rails' },
    img: './style/imgs/Snapshoot_mobile.png',
    link: '',
  },
  {
    id: '3',
    title: 'Data Dashboard Healthcare',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    techStack: { tech1: 'HTML', tech2: 'Bootstrap', tech3: 'Ruby on rails' },
    img: 's',
    link: './style/imgs/Snapshoot_mobile.png',
  },
  {
    id: '4',
    title: 'Professional Art Printing Data',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    techStack: { tech1: 'HTML', tech2: 'Bootstrap', tech3: 'Ruby on rails' },
    img: './style/imgs/Snapshoot_mobile.png',
    link: '',
  },
  {
    id: '5',
    title: 'Data Dashboard Healthcare',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    techStack: { tech1: 'HTML', tech2: 'Bootstrap', tech3: 'Ruby on rails' },
    img: './style/imgs/Snapshoot_mobile.png',
    link: '',
  },
  {
    id: '6',
    title: 'Data Dashboard Healthcare',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque dolorem voluptatum. Eum adipisci omnis dolores ab est nobis at   repudiandae consequatur eaque dolorem! Nostrum dolorem aspernatur debitis perferendis quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste ipsa error esse eum veritatis, nihil',
    techStack: { tech1: 'HTML', tech2: 'Bootstrap', tech3: 'Ruby on rails' },
    img: './style/imgs/Snapshoot_mobile.png',
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

const closePopUpHandler = (event) => {
  event.preventDefault();
  overly.classList.add('hidden-g');
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
  popups.innerHTML = '';
  overly.classList.remove('hidden-g');
  const id = e.target.dataset.show;
  const [templateMakeup] = projectData.filter((item) => item.id === id);
  const markUp = ` 
  <div class="flex-row ">
  <h2>${templateMakeup.title}</h2>
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
height="32"
width="32"
stroke="#000"
class="w-6 h-6 crossIcon"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M6 18L18 6M6 6l12 12"
/>
</svg>
</div>
  <ul3 class="skills-lan flex-row">
  <li><a class="tag" href="#">  ${templateMakeup.techStack.tech1}</a></li>
  <li><a class="tag" href="#">  ${templateMakeup.techStack.tech2}</a></li>
  <li><a class="tag" href="#">  ${templateMakeup.techStack.tech3}</a></li>
  </ul3
  <div class="bg-img"><img class="projectsnap" src=${templateMakeup.img} alt="project screen shoot"> </div>
  <p>
      ${templateMakeup.description}
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
  closePopUp = document.querySelector('.crossIcon');
  closePopUp.addEventListener('click', closePopUpHandler);
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
