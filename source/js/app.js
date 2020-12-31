"use strict";

const navMainElement = document.querySelector(`.main-nav`);
const navToggle = document.querySelector(`.main-nav__toggle`);
const nojsClass = `main-nav--nojs`;
const openedClass = `main-nav--opened`;
const closedClass = `main-nav--closed`;

navMainElement.classList.remove(nojsClass);

const clickHandler = () => {
  if (navMainElement.classList.contains(closedClass)) {
    navMainElement.classList.remove(closedClass);
    navMainElement.classList.add(openedClass);
  } else {
    navMainElement.classList.remove(openedClass);
    navMainElement.classList.add(closedClass);
  }
}

navToggle.addEventListener('click', clickHandler);
