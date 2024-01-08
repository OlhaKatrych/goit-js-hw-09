const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('input', handlerInput);
form.addEventListener('submit', handlerSubmit);

getItems()

function handlerInput(e) {
  const objInputValue = {
    email: e.target.value.trim(),
    message: e.target.value.trim(),
  };

  localStorage.setItem(LS_KEY, JSON.stringify(objInputValue));
}

function handlerSubmit(e) {
  e.preventDefault();
  const elements = {
    email: e.target.elements.email.value,
    message: e.target.elements.message.value,
  };

  console.log(elements);
  localStorage.removeItem(LS_KEY);
  form.reset();
}

function getItems() {
  const savedMessage = localStorage.getItem(LS_KEY);

  if (savedMessage) {
    input.value = savedMessage;
    textarea.value = savedMessage;
  }else{

    input.value = '';
    textarea.value = '';
  }
}

