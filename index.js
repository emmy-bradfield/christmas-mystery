'use strict'

const BTN = document.querySelector("#btn");
const INP = document.querySelector("#inp");
const FRM = document.querySelector("#form");

let RESULT = document.createElement("h4");
let TREAT = document.createElement("button");
let DWN = document.createElement("a");

let OUT = "";

DWN.setAttribute("href", "./assets/treat.pdf");
DWN.setAttribute("target", "_blank");

TREAT.setAttribute("id", "btn2");
TREAT.textContent = "Gimme! Gimme! Gimme!";

const SUBMIT = (e) => {
  e.preventDefault();
  console.log("started");
  let ANSWER = INP.value;
  if (ANSWER == 4) {
    OUT = "WELL DONE! You got it right!";
  } else {
    OUT = "You're wrong, but I love you anyway so you can have a treat!";
  }
  RESULT.textContent = OUT;
  FRM.appendChild(RESULT);
  DWN.appendChild(TREAT);
  FRM.appendChild(DWN);
};

BTN.addEventListener("click", SUBMIT);