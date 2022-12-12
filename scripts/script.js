// JavaScript Document
console.log("hi");

// variabelen voor hamburgermenu
const buttonNav = document.querySelector("header button");
const menuNav = document.querySelector("header nav:nth-of-type(2)")

// variabelen voor zoekicoon
const zoekIcoon = document.querySelector("header nav:nth-of-type(1) a:nth-of-type(2) svg");
const zoekFormulier = document.querySelector("header form");
const kruisIcoon = document.querySelector("header form button:nth-of-type(2)")

// eventlistener voor openen menu met klikken
buttonNav.addEventListener("click", openMenu);

// functie voor uitvoeren en toggle voor open en dicht
function openMenu() {
    menuNav.classList.toggle("open");
    buttonNav.classList.toggle("openMenu");
    // menuNav.removeAttribute("inert");
}

// eventlistener voor openen zoekbalk en kruis ernaast
zoekIcoon.addEventListener("click", zoekbalkOpenen);
kruisIcoon.addEventListener("click", zoekbalkOpenen);

// functie voor uitvoeren en class toevoegen voor openen en verwijderen met kruisje voor sluiten 
function zoekbalkOpenen() {
    console.log("hoi");
    if (zoekFormulier.classList.contains("openzoekbalk")) {
        zoekFormulier.classList.remove("openzoekbalk");
    } else {
        zoekFormulier.classList.add("openzoekbalk");
    }
}



