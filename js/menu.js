const menuOpen = document.querySelector('.open_menu');
const closeMenu = document.querySelector('.close_menu');
const menuBarLinks = document.getElementsByClassName('menu_bar')[0];

function openCloseMenu() {
  const topBar = document.querySelector('.top__bar');
  const menu = document.querySelector('.menu');
  const menuBar = document.querySelector('.menu_bar');
  topBar.classList.toggle('inout');
  menuOpen.classList.toggle('hidden');
  closeMenu.classList.toggle('inoutrem');
  menu.classList.toggle('inout');
  menuBar.classList.toggle('inout');
}

menuOpen.addEventListener('click', openCloseMenu);
closeMenu.addEventListener('click', openCloseMenu);
menuBarLinks.addEventListener('click', openCloseMenu);
