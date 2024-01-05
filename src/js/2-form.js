const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';
const input = form.elements.email;
const textarea = form.elements.message;

form.addEventListener('input', handlerInput);
form.addEventListener('submit', handlerSubmit);

function handlerInput(e) {
  const LS_OBJ = {
    email: localStorage.setItem(LS_KEY, e.target.value.trim()),
    message: localStorage.setItem(LS_KEY, e.target.value.trim()),
  };
}

function handlerSubmit(e) {
  e.preventDefault();
  const LS_OBJ = {
    email: e.target.elements.email.value,
    message: e.target.elements.message.value,
  };
  input.value = localStorage.getItem(LS_KEY) ?? '';
  textarea.value = localStorage.getItem(LS_KEY) ?? '';
  console.log(LS_OBJ);
  localStorage.removeItem(LS_KEY);
  form.reset();
}
