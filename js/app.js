
const nav = document.querySelector('nav');
const divNav = document.querySelector('.nav div');
const btn = document.querySelector('button');
const icon = document.querySelector('i');
const links = document.querySelectorAll('nav a');

changeClasses(btn);

for (const link of links) {
  changeClasses(link);
}

function changeClasses(element) {
  element.addEventListener('click', () => {
    nav.classList.toggle('nav');
    nav.classList.toggle('nav--vertical');
    divNav.classList.toggle('nav__hiden');
    divNav.classList.toggle('nav__show');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });
}
