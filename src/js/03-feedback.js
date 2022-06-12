const throttle = require('lodash.throttle');

const myForm = document.querySelector(".feedback-form");
const myEmail = document.querySelector(".email");
const myFeedback = document.querySelector(".message");
// const myButton = document.querySelector(".button");

const KEY_EMAIL = "feedback-form-state";
const KEY_MESSAGE = "msg-key";

myForm.addEventListener('submit', onFormSubmit)
myEmail.addEventListener('input', throttle(emailChanging, 500));
myFeedback.addEventListener('input', throttle(feedbackChanging, 500));
// myButton.addEventListener('submit', fixingInput);
fixingEmail();
fixingMessage();

function onFormSubmit(e) {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;
    const FormData = {
        email,
        message,
    }
    console.log(FormData)
    e.currentTarget.reset();
    localStorage.removeItem(KEY_EMAIL);
    localStorage.removeItem(KEY_MESSAGE);
}


function emailChanging(e) {
    const email = e.target.value;
    console.log('email:', email);
    localStorage.setItem(KEY_EMAIL, email);
}

function feedbackChanging(e) {
    const message = e.target.value;
    console.log('message:', message);
    localStorage.setItem(KEY_MESSAGE, message);
}

function fixingEmail() {
    // myEmail.removeEventListener;
    const savedEmail = localStorage.getItem(KEY_EMAIL);
    if (savedEmail) {
        console.log('email:',savedEmail);
        myEmail.value = savedEmail;
    }
}

function fixingMessage() { 
    const savedMessage = localStorage.getItem(KEY_MESSAGE);
    if (savedMessage) {
        console.log('message:',savedMessage);
        myFeedback.value = savedMessage
    }
}
// myEmail.removeEventListener('submit', removingListen)