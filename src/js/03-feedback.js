const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea')
}


refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(evt) {}

function onTextareaInput(evt) {
    const message = evt.currentTarget.value;
    localStorage.setItem('feedback-form-state', message);
    console.log(message);
}

function populateMessageOutput() {}









