"use strict";

const modal = document.querySelector(".modal");
//buttons
const btnModal = document.querySelector(".btn--modal");
const btnCloseModal = document.querySelector(".close-modal");
const btnSubmit = document.querySelector(".btn--submit");

//Text
const output1 = document.querySelector("#output1");
const output2 = document.querySelector("#output2");
const Username = document.querySelector("#UserName"); //Form input
const Email = document.querySelector("#email"); //Form input

//To open Modal Window
const openModal = function () {
  modal.classList.remove("hidden");
};

//To close Modal Window
const closeModal = function () {
  modal.classList.add("hidden");
};

//TO DISPLAY TEXT
const display = function (event) {
  btnModal.classList.add("hidden");
  event.preventDefault();
  modal.classList.add("hidden");
  console.log("Clicked Submit");
  output1.textContent = "Username: " + Username.value;
  output2.textContent = "Email: " + Email.value;
};

//EVENTS HANDLING
btnModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

btnSubmit.addEventListener("click", display);
