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

function handlerInput(e) {
  
  const objInputValue = {
    email: e.currentTarget.elements.email.value.trim(),
    message: e.currentTarget.elements.message.value.trim(),
  };
  console.log(objInputValue)

  localStorage.setItem(LS_KEY, JSON.stringify(objInputValue));
}

function handlerSubmit(e) {
  e.preventDefault();
  const elements = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  if (elements.email === '' || elements.message === '') {
    alert('Please fill out all fields!');
  } else {
    console.log(elements);
    localStorage.removeItem(LS_KEY);
    form.reset();
  }
}
