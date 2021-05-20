let form = null;

window.addEventListener('load', () => {
  form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
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

  console.log('data', data);
};
