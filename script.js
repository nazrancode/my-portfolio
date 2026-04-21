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