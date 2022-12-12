// JavaScript Document
console.log("hi");

// variabelen voor hamburgermenu
const buttonNav = document.querySelector("header button");
const menuNav = document.querySelector("header nav:nth-of-type(2)");

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

// variabelen voor slider tweede pagina
const toleftButton = document.querySelector("main section:nth-of-type(1) button:nth-of-type(1)");
const torightButton = document.querySelector("main section:nth-of-type(1) button:nth-of-type(2)");
const deUl = document.querySelector("main section:nth-of-type(1) ul");

// functie voor uitvoeren van pijltje links en dat het smooth verloopt
        function toLeft() {
            deUl.scrollTo({
                left:0,
                behavior:'smooth'
            });
        }

// functie voor uitvoeren van pijltje rechts en dat het smooth verloopt
        function toRight() {
            deUl.scrollTo({
                left:10000,
                behavior:'smooth'
            });
        }

// eventlistener voor klikken op linker pijltje
toleftButton.addEventListener("click", toLeft);

// eventlistener voor klikken rechter pijltje
torightButton.addEventListener("click",toRight);


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