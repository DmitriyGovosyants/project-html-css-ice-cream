const mobileMenu = document.querySelector("[mobile-menu]");
const openMenuBtn = document.querySelector("[open-menu]");
const closeMenuBtn = document.querySelector("[close-menu]");
const mobileMenuNav = document.querySelector(".mobile-menu__list");

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
mobileMenuNav.addEventListener('click', onClickAnchorMobileMenuClose);
window.matchMedia('(min-width: 1280px)').addEventListener('change', onTabletMQMobileMenuClose);

function toggleMenu() {
  const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
  document.body.classList.toggle('overflow--is-hidden');
};

function onClickAnchorMobileMenuClose(e) {
  if (e.target.nodeName !== 'A') return;  
  toggleMenu();
};

function onTabletMQMobileMenuClose(e) {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  document.body.classList.remove('overflow--is-hidden');
};


