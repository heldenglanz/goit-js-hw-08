// const throttle = require('lodash.throttle');

const myForm = document.querySelector(".feedback-form");
const myEmail = document.querySelector(".email");
const myFeedback = document.querySelector(".message");
const myButton = document.querySelector(".button");

myEmail.addEventListener('input', emailChanging);
myButton.addEventListener('submit', removingListen);

function emailChanging(e) {
    const writedEmail = e.currentTarget.value;
    localStorage.setItem("feedback-form-state", writedEmail);
}


function removingListen(e) {
myEmail.removeEventListener;
    console.log(localStorage.getItem("feedback-form-state"));
    localStorage.clear();
}



// myEmail.removeEventListener('submit', removingListen)