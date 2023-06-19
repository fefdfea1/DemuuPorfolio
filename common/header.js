const hamburgermenu = () => {
  const headerMenu2 = document.querySelector('.header-menu2');

  headerMenu2.addEventListener('click', function() {
    headerMenu2.style.display = 'none';
  })
};

export const headerPhoneScreen = () => {
  hamburgermenu();
};