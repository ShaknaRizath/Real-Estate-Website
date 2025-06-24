'use strict';
/**
 * navbar toggle in mobile
 */

const/**{nodeElement}*/ $navbar = document.querySelector("[data-navbar]");
const/**{nodeElement}*/ $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

/**
 *HEADER Scroll state
 */

 const /**{NodeElement} */ $header = document.querySelector("[data-header]");

 window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"] ("active");
 });

 /**
  * Add to favorites button toggle
 */

 const /**{NodeList}*/ $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

 $toggleBtns.forEach($toggleBtn =>{
    $toggleBtn.addEventListener("click", () =>{
        $toggleBtn.classList.toggle("active");
    })
 });