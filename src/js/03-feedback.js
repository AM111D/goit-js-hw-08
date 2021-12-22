import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
  feedback: 'feedback-form-state',
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

let formData = {};

populateMessage();

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(refs.feedback);

  console.log(formData);

  formData = {};
}

function populateMessage() {
  const savedMessage = JSON.parse(localStorage.getItem(refs.feedback));

  if (savedMessage === null || savedMessage === undefined) {
    return;
  }
  formData = savedMessage;

  refs.email.value = savedMessage.email ? savedMessage.email : refs.email.value;
  refs.message.value = savedMessage.message ? savedMessage.message : refs.message.value;
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(refs.feedback, JSON.stringify(formData));
}