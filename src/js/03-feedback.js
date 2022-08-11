import throttle from 'lodash.throttle';
const STORAGE_KEY = "feedback-form-state";


const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector("textarea");

formEl.addEventListener('submit', submitFn);
inputEl.addEventListener('input', inputChange);
savedTextarea()

function submitFn(e){
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
 }
 

function inputChange(e){
    const writed = e.currentTarget.value;
    console.log(writed)
   localStorage.setItem(STORAGE_KEY, writed);
}




function savedTextarea(){
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if(savedMessage){
        console.log(savedMessage);
        inputEl.value = savedMessage;
    }
}
