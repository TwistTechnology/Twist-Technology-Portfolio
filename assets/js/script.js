'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);



/**
 * close navbar when click on any navbar links
 */

const navLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 100 ? header.classList.add("active")
    : header.classList.remove("active");
}

addEventOnElem(window, "scroll", headerActive);



/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () { this.classList.toggle("active"); }

addEventOnElem(accordionAction, "click", toggleAccordion);


//adding whats app button

function goToWhatsApp()
{
  console.log("Method Hit");
  // var clickWhatsApp = document.getElementById("whatsappBtn").addEventListener("click" , ()=>
  // {
    window.open("https://wa.link/cs64if", "_blank");
  // });
  
}


function sendMail()
{
  console.log("Method Hit")

  var str,
element = document.getElementById('email-field');
if (element != null) {
    str = element.value;
}
else {
    str = null;
}
  var params = 
  {
    from_name : "twisttechnology1969@gmail.com",
    email_id : str
  }
  emailjs.send("service_1kotala","twist_tech_template",params).then(function(res)
  {
    alert("Success!! "+res.status);
  })
}