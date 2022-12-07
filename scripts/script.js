// JavaScript Document
console.log("hi");

const buttonNav = document.querySelector("header button");
const menuNav = document.querySelector("header nav:nth-of-type(2)")

buttonNav.addEventListener("click", openMenu);

function openMenu() {
    menuNav.classList.toggle("open");
    buttonNav.classList.toggle("openMenu");
    // menuNav.removeAttribute("inert");
}

