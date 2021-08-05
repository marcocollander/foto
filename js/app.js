const nav = document.querySelector('nav');
const btn = document.querySelector('button');
const icon = document.querySelector('i');
const navItems = document.querySelector('div.nav-items');

btn.addEventListener('click', () => {
  nav.classList.toggle('nav');
  nav.classList.toggle('nav-only');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
  navItems.classList.toggle('nav-items');
  navItems.classList.toggle('nav-items--vertical');
});
