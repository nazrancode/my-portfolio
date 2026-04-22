console.log("Portfolio loaded");

document.addEventListener("DOMContentLoaded", function () {
  alert("Welcome to Nazran Arfan's Portfolio");
});

function showMessage() {
  alert("Thanks for visiting my portfolio!");
}

//

document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});

// Smooth scroll
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});

// Button actions
function viewCode() {
  alert("This will link to GitHub project soon");
}

function contactMe() {
  alert("Email me at nazran.code@gmail.com");
}

// Page load log
console.log("Portfolio Loaded");

function viewCode() {
  window.open("");
}

///


// Smooth scroll
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});

// Buttons
function openProject() {
  window.open("https://nazrancode.github.io/my-portfolio");
}

function contactMe() {
  alert("Email me at nazran.code@gmail.com");
}

console.log("Portfolio v2 loaded");