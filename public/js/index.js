let form = null;
let phone = null;
let menu = null;
let nav = null;
let show = true;

window.addEventListener('load', () => {
  form = document.querySelector('form');
  nav = document.querySelector('nav');
  menu = document.querySelector('#menu');
  phone = document.querySelector('#phone');
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
