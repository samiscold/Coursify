// Loader

const fadeOut = () => {
  const loaderWrapper = document.querySelector('.wrapper');
  loaderWrapper.classList.add('fades');
}


let likeButton = document.querySelector('.fa-thumbs-up');
// likeButton.style.color = "black";

likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('like-color')
})

function buttonContinue() {
  let x = document.getElementById("intro-section");
  x.style.transform = 'translate(0,-100%)'
  x.style.transition = "1s"
  setTimeout(function () { window.location = "login.html"; }, 1100);
}




//navbar
//     let navToggle = document.querySelector(".nav__toggle");
// let navWrapper = document.querySelector(".nav__wrapper");

// navToggle.addEventListener("click", function () {
//   if (navWrapper.classList.contains("active")) {
//     this.setAttribute("aria-expanded", "false");
//     this.setAttribute("aria-label", "menu");
//     navWrapper.classList.remove("active");
//   } else {
//     navWrapper.classList.add("active");
//     this.setAttribute("aria-label", "close menu");
//     this.setAttribute("aria-expanded", "true");
//     searchForm.classList.remove("active");
//     searchToggle.classList.remove("active");
//   }
// });

// let searchToggle = document.querySelector(".search__toggle");
// let searchForm = document.querySelector(".search__form");

// searchToggle.addEventListener("click", showSearch);

// function showSearch() {
//   searchForm.classList.toggle("active");
//   searchToggle.classList.toggle("active");

//   navToggle.setAttribute("aria-expanded", "false");
//   navToggle.setAttribute("aria-label", "menu");
//   navWrapper.classList.remove("active");

//   if (searchToggle.classList.contains("active")) {
//     searchToggle.setAttribute("aria-label", "Close search");
//   } else {
//     searchToggle.setAttribute("aria-label", "Open search");
//   }
// }


function showMenu(menu) {
  menu.classList.toggle('open');

}

// **********
// **Slider**
// **********

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Dark / Light Mode
function toggleDarkLight() {
  const fa_moon = document.querySelector('.fa-moon')
  let DL = document.querySelector('.D-L');
  var body = document.querySelector("#bodys");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  if (body.className == "dark-mode") {
    DL.textContent = "Dark"
    DL.style.color = "#ee6001"
    fa_moon.style.color = "#ee6001"

  } else {
    DL.textContent = "Light"
    DL.style.color = "white"
    fa_moon.style.color = "white"
  }
}




