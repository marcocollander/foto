const btn = document.querySelector('.burger-icon');
const icon = document.querySelector('.burger-icon i');
const navDiv = document.querySelector('.nav div');

function classChange(element) {
  element.addEventListener('click', () => {
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    navDiv.classList.toggle('nav__items');
    navDiv.classList.toggle('nav__show');
  });
}

classChange(btn);

const links = document.querySelectorAll('.nav a');

for (const link of links) {
  classChange(link);
}
