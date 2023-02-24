// --------------------------IMPORTS---------------------------------------
import throttle from 'lodash.throttle';

// --------------------------EXPORT-----------------------------------------

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

// --------------------------FUNCTIONS-------------------------------------

form.addEventListener('submit', onFromSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

function onFromSubmit(event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Please, fill the form');
  }

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  const formData = {
    email: email.value,
    message: message.value,
  };
  console.log(formData);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateTextarea();

function populateTextarea() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveData) {
    email.value = saveData.email;
    message.value = saveData.message;
  }
}
