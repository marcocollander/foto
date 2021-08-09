const nav = document.querySelector('nav');
const btn = document.querySelector('button');
const icon = document.querySelector('i');
const navItems = document.querySelector('div.nav-items');
const links = document.querySelectorAll('.wrapper a');

changeClasses(btn);

for (const link of links) {
  changeClasses(link);
}

function changeClasses(element) {
  element.addEventListener('click', () => {
    nav.classList.toggle('nav');
    nav.classList.toggle('nav-only');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    navItems.classList.toggle('nav-items');
    navItems.classList.toggle('nav-items--vertical');
  });
}
