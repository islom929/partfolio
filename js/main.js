const body = document.getElementById("body");
let navIcon = document.querySelector('.nav__icon');


// navIcon.addEventListener('click', function() {
//   navIcon.classList.toggle("open");
// })

// console.log();
var typed = new Typed("#example", {
  strings: [
  "Islom",
  "a Web-Developer",
  "a Freelancer"
  ],
  typeSpeed: 90,
  backspaceSpeed: 50,
  loop:true
});

window.addEventListener('scroll', function() {
  document.querySelector('.hero__nav').classList.add("hero__nav--scrolled");
});

function navMenu () {
  body.querySelector("header").classList.toggle("nav__menu")
  navIcon.classList.toggle("open__icon");
}

function changeColorDark () {
  body.classList.toggle("dark");
  body.classList.remove("blue");
  body.classList.remove("white");
}

function changeColorWhite () {
  body.classList.remove("pink");
  body.classList.remove("gray");
  body.classList.remove("blue");
  body.classList.remove("yellow");
  body.classList.remove("green");
}

function changeColorBlue () {
  body.classList.remove("white");
  body.classList.remove("pink");
  body.classList.remove("gray");
  body.classList.remove("yellow");
  body.classList.remove("green");
}

function changeColorPink () {
  body.classList.remove("white");
  body.classList.remove("blue");
  body.classList.remove("gray");
  body.classList.remove("yellow");
  body.classList.remove("green");
  body.classList.add("pink");
}

function changeColorGray () {
  body.classList.remove("white");
  body.classList.remove("pink");
  body.classList.remove("blue");
  body.classList.remove("yellow");
  body.classList.remove("green");
  body.classList.add("gray");
}

function changeColorYellow () {
  body.classList.remove("white");
  body.classList.remove("pink");
  body.classList.remove("blue");
  body.classList.remove("gray");
  body.classList.remove("green");
  body.classList.add("yellow");
}

function changeColorGreen () {
  body.classList.remove("gray");
  body.classList.remove("yellow");
  body.classList.remove("white");
  body.classList.remove("pink");
  body.classList.remove("blue");
  body.classList.add("green");
}

function colorWhiteBlue () {
  if (body.classList.contains("dark")) {
    changeColorWhite();
  } else {
    changeColorBlue();
  }
}
