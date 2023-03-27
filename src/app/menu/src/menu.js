const iconMenu = document.querySelector('.icon-menu');

iconMenu.addEventListener('click', () => {
  const menuItems = document.querySelector('.menu-items');
  menuItems.classList.toggle('show');
});
