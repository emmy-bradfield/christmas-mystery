'use strict'

const BTN = document.querySelector("#btn");
const INP = document.querySelector("#inp");
const FRM = document.querySelector("#form");
let RESULT = document.createElement("h4");
let OUT = "";

const SUBMIT = () => {
  console.log("started");
  let ANSWER = INP.value();
  if (ANSWER = 4) {
    OUT = "WELL DONE! You got it right!";
  } else {
    OUT = "You're wrong, but I love you anyway so you can have a treat!";
  }
  RESULT.textContent = OUT;
  FRM.appendChild(RESULT);
};

BTN.addEventListener("click", SUBMIT);