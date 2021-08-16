const btn = document.querySelector('.burger-icon');
const icon = document.querySelector('.burger-icon i');
const navDiv = document.querySelector('.nav div');

function classChange(element) {
  element.addEventListener('click', () => {
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    navDiv.classList.toggle('animation');
    navDiv.classList.add('no-animation');
  });
}

classChange(btn);

const links = document.querySelectorAll('.nav a');

for (const link of links) {
  classChange(link);
}
