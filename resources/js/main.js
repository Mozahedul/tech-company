const mobileMenu = document.getElementById('menu-bar');
const headerMenu = document.getElementById('mainHeader');
const menuClose = document.getElementById('menu-close');

// Open header menu
mobileMenu.addEventListener('click', () => {
  headerMenu.style.display = 'flex';
  menuClose.style.display = 'block';
  mobileMenu.style.display = 'none';
});

// Close header menu
menuClose.addEventListener('click', () => {
  headerMenu.style.display = 'none';
  menuClose.style.display = 'none';
  mobileMenu.style.display = 'block';
});

document.addEventListener('mousedown', (e) => {
  if (window.innerWidth < 768) {
    if (!headerMenu.contains(e.target)) {
      headerMenu.style.display = 'none';
      menuClose.style.display = 'none';
      mobileMenu.style.display = 'block';
    }
  }
});
