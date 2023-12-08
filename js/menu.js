const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.querySelector('.navLinks');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
});

// Close the menu and reset styles when the window is resized
window.addEventListener('resize', () => {
  if (window.innerWidth > 460) {
    navLinks.classList.remove('active');
    hamburgerMenu.classList.remove('active');
  }
});