const burger = document.querySelector("#main-menu");
const menu = document.querySelector("#mobile-menu");
const closeBurger = document.querySelector("#close-menu");

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }else {
        menu.classList.add('hidden');
    }
  }

// closes the mobile menu when you click X
function closeMenu(){
    if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }
  }

// EventListener to open Burger menu
burger.addEventListener("click", toggleHamburger);

// EventListener to close Burger menu
closeBurger.addEventListener("click", closeMenu);

