let form = null;
let phone = null;
let menu = null;
let nav = null;
let serviceImg = null;
let arrows = null;
let show = true;

let currentServiceImgIndex = 0;
const servicesImgsSrc = ['./img/insurance.png', './img/background.jpeg'];

window.addEventListener('load', () => {
  form = document.querySelector('form');
  nav = document.querySelector('nav');
  menu = document.querySelector('#menu');
  phone = document.querySelector('#phone');
  serviceImg = document.querySelector('#serviceImg');
  arrows = Array.from(document.querySelectorAll('.arrow-container'));

  arrows[0].addEventListener('click', handleImageCarousel);
  arrows[1].addEventListener('click', handleImageCarousel);
  arrows[0].direction = 1;
  arrows[1].direction = -1;

  form.addEventListener('submit', handleSubmit);
  menu.addEventListener('click', handleMenuOpen);
  phone.addEventListener('input', handlePhoneChange);
});

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(form.elements.checkbox.checked);
  const data = {
    name: form.elements.name.value,
    phone: form.elements.phone.value,
    email: form.elements.email.value,
    type: form.elements.type.value,
    checkbox: form.elements.checkbox.checked,
  };
};

const handlePhoneChange = (event) => {
  if (event.data) {
    if (event.target.value.length === 3) phone.value += '-';
    else if (event.target.value.length === 7) phone.value += '-';
  }
};

const handleMenuOpen = () => {
  document.body.style.overflow = show ? 'hidden' : 'initial';
  nav.classList.toggle('on', show);
  menu.classList.toggle('menu-oppend', show);
  show = !show;
};

const handleImageCarousel = (event) => {
  const { direction } = event.currentTarget;
  if (direction) {
    if (currentServiceImgIndex === servicesImgsSrc.length - 1)
      currentServiceImgIndex = 0;
    else currentServiceImgIndex++;
  } else {
    if (currentServiceImgIndex === 0)
      currentServiceImgIndex = servicesImgsSrc.length - 1;
    else currentServiceImgIndex--;
  }

  serviceImg.src = servicesImgsSrc[currentServiceImgIndex];
};
