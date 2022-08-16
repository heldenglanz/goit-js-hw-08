import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector("textarea");
const emailEl = document.querySelector("input");

formEl.addEventListener('submit', submitFn);
formEl.addEventListener('input', throttle(inputChange, 500));
// inputEl.addEventListener('input', throttle(inputChange, 500));
// emailEl.addEventListener('input', throttle(inputChange, 500));
savedTextarea()

function submitFn(e){
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
 }
 
function inputChange(e){
    const mailName = emailEl.value.trim();
    const messageText = inputEl.value.trim();
    const savedMessage = {
        email: mailName,
        message: messageText,
    }
   localStorage.setItem(STORAGE_KEY, JSON.stringify(savedMessage));
console.log(savedMessage)
}

function savedTextarea(){
    const savedMessage = localStorage.getItem(STORAGE_KEY);
     const parsed = JSON.parse(savedMessage);
    if(savedMessage){
        emailEl.value = parsed.email;
        inputEl.value = parsed.message;
    }
}