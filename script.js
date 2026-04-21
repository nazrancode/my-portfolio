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
  alert("Email me at your-email@gmail.com");
}

// Page load log
console.log("Portfolio Loaded");

function viewCode() {
  window.open("https://nazrancode.github.io/my-portfolio/");
}