const workData = [
  {
    id: 1,
    name: 'Awesome Books',
    photo: './Images/awesomeBook.png',
    languages_list: ['CSS', 'Javascript', 'Html'],
    btn_text: 'See Project',
  },
  {
    id: 2,
    name: 'Math Magician',
    photo: './Images/calculatorApp.png',
    languages_list: ['React', 'HTML', 'CSS'],
    btn_text: 'See Project',
  },
  {
    id: 3,
    name: 'Portfolio Project',
    photo: './Images/budgetapps.png',
    languages_list: ['TypeScript', 'Javascript', 'Sass'],
    btn_text: 'See Project',
  },
  {
    id: 4,
    name: 'Drone Summit',
    photo: './Images/capstone.png',
    languages_list: ['Html', 'Css', 'Javascript'],
    btn_text: 'See Project',
  },
  {
    id: 5,
    name: 'Covid Checker',
    photo: './Images/metricsapps.png',
    languages_list: ['React', 'Redux', 'API', 'Html/CSS'],
    btn_text: 'See Project',
  },
  {
    id: 6,
    name: 'Space Travellers Hub',
    photo: './Images/worldfoods.png',
    languages_list: ['JavaScript', 'HTML/CSS'],
    btn_text: 'See Project',
  },
];

function languages(languages) {
  return `${languages.map((language) => `<li>${language}</li>`).join('')} `;
}

function workTemplate(work) {
  return `
    <li class="flex-box">
    <ul class="firstList">
      <li><img src=${work.photo} alt="My-Work"></li>
      <li><h1>${work.name}</h1></li>
    </ul>
  
  <div class="list-box">
 <ul>
 ${languages(work.languages_list)}
 </ul>
 </div>
  <ul class="See-btn" id="seeBtn-List">
    <li><button type="button" class="see-project" id=${work.id}>${work.btn_text}</button></li>
  </ul>
</li>
    `;
}

document.getElementById('dynamicWork').innerHTML = `${workData.map(workTemplate).join('')}`;

// Work Popup

const workPopUp = [
  {
    id: 1,
    photo: './Images/awesomeBook.png',
    languages_list: ['HTML', 'CSS', 'Javascript'],
    desktoplist: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal'],
    btn_text: 'See Project',
    description: '`Awesome Books` is a simple website that allows the user to add and remove books and display them. This app also stores <strong>books</strong> in a local storage',
    heading: 'Awesome Books',
    firstBtn: 'See Live',
    secondBtn: 'See Source',
    liveLink: 'https://alexander16108.github.io/Chaws-Awesome-B00k-Store/',
    sourceLink: 'https://github.com/alexander16108/Chaws-Awesome-B00k-Store',
  },
  {
    id: 2,
    photo: './Images/calculatorApp.png',
    languages_list: ['React', 'HTML', 'CSS'],
    desktoplist: ['Netlify', 'Github', 'Bootstrap', 'Terminal'],
    btn_text: 'See Project',
    description: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations.',
    heading: 'Math Magician',
    firstBtn: 'See Live',
    secondBtn: 'See Source',
    liveLink: 'https://alexis-math-magician.netlify.app/',
    sourceLink: 'https://github.com/alexander16108/react-math-calculator',
  },
  {
    id: 3,
    photo: './Images/budgetapps.png',
    languages_list: ['TypeScript', 'Javascript', 'Sass'],
    desktoplist: ['Codekit', 'Github', 'Bootstrap', 'Terminal'],
    btn_text: 'See Project',
    description: ' Easy to adapt and deploy portfolio project covering most important sections(about, exp, skills, projects), inspired with solutions found at GitHub. Check live preview(link below)',
    heading: 'Budget App',
    firstBtn: 'See Live',
    secondBtn: 'See Source',
    liveLink: 'https://alexander-personal-portfolio.netlify.app/',
    sourceLink: 'https://github.com/alexander16108/portfolio-project-v2',
  },
  {
    id: 4,
    photo: './Images/capstone.png',
    languages_list: ['Html/CSS', 'JavaScript'],
    desktoplist: ['Codekit', 'Github', 'Bootstrap', 'Terminal'],
    btn_text: 'See Project',
    description: 'The future of passenger drones remains uncertain since this technology is so new. Innovation in aerial drone technology, and in aerial traffic coordination, control, and collision-avoidance could result in rapid proliferation of passenger drones for civilian travel.',
    heading: 'Drone Summit',
    firstBtn: 'See Live',
    secondBtn: 'See Source',
    liveLink: 'https://alexander16108.github.io/capstone-project/',
    sourceLink: 'https://github.com/alexander16108/capstone-project',
  },
  {
    id: 5,
    photo: './Images/metricsapps.png',
    languages_list: ['React', 'Redux', 'API', 'Html/CSS'],
    desktoplist: ['Codekit', 'Github', 'Bootstrap', 'Terminal'],
    btn_text: 'See Project',
    description: 'Covid-19 metrics app collects information from different data sources to provide details about covid-19. You can filter data by continent and country.',
    heading: 'Metrics Webapp',
    firstBtn: 'See Live',
    secondBtn: 'See Source',
    liveLink: 'https://deploy-preview-3--eloquent-leavitt-8c9f5c.netlify.app/',
    sourceLink: 'https://github.com/alexander16108/React-Capstone',
  },
  
  {
    id: 6,
    photo: './Images/worldfoods.png',
    languages_list: ['JavaScript', 'Webpack', 'HTML/CSS'],
    desktoplist: ['Codekit', 'Github', 'Bootstrap', 'Terminal'],
    btn_text: 'See Project',
    description: 'In this project, we built a space travelers application with React and Redux. Here, users can navigate between Rockets, Missions, and Dragons.',
    heading: 'Space Travellers Hub',
    firstBtn: 'See Live',
    secondBtn: 'See Source',
    liveLink: 'https://spacexapi-demo.netlify.app/',
    sourceLink: 'https://github.com/nikoescobal/space-travelers',
  },
];

function languagesPopup(languages) {
  return `${languages.map((language) => `<li>${language}</li>`).join('')}`;
}

function languagesPopupDesktop(languages) {
  return `${languages.map((language) => `<li>${language}</li>`).join('')}`;
}

function workPopup(works) {
  return `
  <div class="workMainDiv">
    <span class="cl-tag fa fa-close" id="firstClose"></span>
    <div class="workImgDiv">
      <img src=${works.photo} alt="My-Work" id="closeTab">
    </div>
  <div class="workContentDiv">
    <div class="workHeadingDiv">
      <h1>${works.heading}</h1>
      <ul class="workButtonDiv">
        <li><a href=${works.liveLink} target="_blank"><button type="button" >${works.firstBtn}<i class="fa fa-external-link" aria-hidden="true"></i></button></a></li>
        <li><a href=${works.sourceLink} target="_blank"><button type="button">${works.secondBtn}<i class="fa fa-github" aria-hidden="true"></i></button></a></li>
      </ul>
    </div>
    <div class="list-boxPop">
      <ul>
          ${(window.innerWidth < 768) ? languagesPopup(works.languages_list) : languagesPopupDesktop(works.desktoplist)}
      </ul>
    </div>
    <p>${works.description}</p>
    <div class="mobileButtonDiv">
    <ul class="workButtonDiv">
        <li><a href=${works.liveLink} target="_blank"><button type="button" >${works.firstBtn}<i class="fa fa-external-link" aria-hidden="true"></i></button></a></li>
        <li><a href=${works.sourceLink} target="_blank"><button type="button">${works.secondBtn}<i class="fa fa-github" aria-hidden="true"></i></button></a></li>
    </ul>
    </div>
  </div>
  </div>
    `;
}

const modal = document.getElementById('firstPopup');

if (document.getElementById('1')) {
  document.getElementById('1').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[0]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

if (document.getElementById('2')) {
  document.getElementById('2').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[1]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

if (document.getElementById('3')) {
  document.getElementById('3').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[2]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

if (document.getElementById('4')) {
  document.getElementById('4').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[3]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

if (document.getElementById('5')) {
  document.getElementById('5').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[4]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

if (document.getElementById('6')) {
  document.getElementById('6').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[5]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};