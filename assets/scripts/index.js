
function buttonContinue() {
    let x = document.getElementById("intro-section");
    x.style.transform = 'translate(0,-100%)'
    x.style.transition ="1s"
    setTimeout(function(){window.location="welcome.html";}, 1100);
    }

    


    //navbar
    let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});




