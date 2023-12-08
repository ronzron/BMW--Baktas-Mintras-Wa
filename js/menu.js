const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelector(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classlist.remove("active");
    navMenu.classList.remove("active");
  })
);
