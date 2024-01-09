const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';
const input = form.elements.email;
const message = form.elements.message;

getDataFromLS();

function getDataFromLS() {
  const dataFromLS = localStorage.getItem(LS_KEY);
  if (dataFromLS) {
    const savedParse = JSON.parse(dataFromLS);
    input.value = savedParse.email ?? '';
    message.value = savedParse.message ?? '';
  }
}

form.addEventListener('input', handlerInput);
form.addEventListener('submit', handlerSubmit);

function handlerInput() {
  const objInputValue = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
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
