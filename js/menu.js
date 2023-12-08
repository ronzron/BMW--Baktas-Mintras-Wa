document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburgerMenu");

    hamburgerMenu.addEventListener("click", function () {
        this.classList.toggle("active");
        // Toggle visibility of the navigation links
        const navLinks = document.querySelector(".navLinks");
        navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    });
});