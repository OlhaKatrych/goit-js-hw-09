import"./assets/modulepreload-polyfill-ec808ebb.js";const t=document.querySelector(".feedback-form"),s="feedback-form-state",l=t.elements.email,m=t.elements.message;n();function n(){const e=localStorage.getItem(s);if(e){const a=JSON.parse(e);l.value=a.email??"",m.value=a.message??""}}t.addEventListener("input",o);t.addEventListener("submit",r);function o(){const e={email:t.elements.email.value.trim(),message:t.elements.message.value.trim()};localStorage.setItem(s,JSON.stringify(e))}function r(e){e.preventDefault();const a={email:e.target.elements.email.value,message:e.target.elements.message.value};a.email===""||a.message===""?alert("Please fill out all fields!"):console.log(a),localStorage.removeItem(s),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map
