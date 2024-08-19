// set date
document.querySelector("#date").innerHTML = new Date().getFullYear();

// toggle navbar
const navBtn = document.querySelector("#nav-toggle");

navBtn.addEventListener("click", () => {
  document.querySelector("#nav-links").classList.toggle("show-links");
});

// fixed navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 65.59) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});
