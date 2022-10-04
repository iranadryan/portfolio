let width = 0;

const careerTitleElement = document.querySelector('#career .section-title');
const projectsTitleElement = document.querySelector('#projects .section-title');
const contactTitleElement = document.querySelector('#contact .section-title');

function updateWindowSize() {
  if (document.body && document.body.offsetWidth) {
    width = document.body.offsetWidth;
  }

  if (
    document.compatMode === 'CSS1Compat' &&
    document.documentElement &&
    document.documentElement.offsetWidth
  ) {
    width = document.documentElement.offsetWidth;
  }

  if (window.innerWidth) {
    width = window.innerWidth;
  }

  addBreakLineToSectionTitles();
}

function addBreakLineToSectionTitles() {
  if (width <= 600) {
    careerTitleElement.innerHTML = 'Minha<br/>Carreira';
    projectsTitleElement.innerHTML = 'Meus<br/>Projetos';
    contactTitleElement.innerHTML = 'Meus<br/>Contatos';
  } else {
    careerTitleElement.innerHTML = 'Minha Carreira';
    projectsTitleElement.innerHTML = 'Meus Projetos';
    contactTitleElement.innerHTML = 'Meus Contatos';
  }
}

updateWindowSize();

window.addEventListener('resize', updateWindowSize, true);