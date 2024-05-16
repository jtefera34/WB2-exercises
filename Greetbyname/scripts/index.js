"use strict"

window.onload=init

// Function to be executed when the button is clicked
function init() {
  const greetBtn = document.getElementById("greetBtn");
  greetBtn.onclick = onGreetBtnClicked;
  


}

function onGreetBtnClicked() {
  alert("Hi there!" + nameField );}
