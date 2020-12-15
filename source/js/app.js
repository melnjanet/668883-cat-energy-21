"use strict";

const navMain = document.querySelector(`.main-nav`);
const navToggle = document.querySelector(`.main-nav__toggle`);
const nojs = `main-nav--nojs`;
const opened = `main-nav--opened`;
const closed = `main-nav--closed`;

navMain.classList.remove(nojs);

const clickHandler = () => {
  if (navMain.classList.contains(closed)) {
    navMain.classList.remove(closed);
    navMain.classList.add(opened);
  } else {
    navMain.classList.remove(opened);
    navMain.classList.add(closed);
  }
}

navToggle.addEventListener('click', clickHandler);
