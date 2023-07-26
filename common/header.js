const hamburgermenu = () => {
  
  const click = ('ontouchstart' in window) ? 'touchstart' : 'click';

document.querySelector('div.burger').addEventListener(click, function() {
  if (!this.classList.contains('open')) {
    openMenu();
  } else {
    closeMenu();
  }
});

function openMenu() {
  const circle = document.querySelector('div.circle');
  const burger = document.querySelector('div.burger');
  const elements = document.querySelectorAll('div.x, div.y, div.z');
  const menuItems = document.querySelectorAll('.menu2-menus li');
  const body = document.querySelector('body');
  const menu2 = document.querySelector('.menu2-menus');

  body.style.overflow = "hidden";
  body.style.touchAction = "none";
  menu2.style.display = "block";

  circle.classList.add('expand');
  burger.classList.add('open');
  elements.forEach(function(el) {
    el.classList.add('collapse');
  });
  menuItems.forEach(function(li) {
    li.classList.add('animate');
  });

  setTimeout(function() {
    document.querySelector('div.y').style.display = 'none';
    document.querySelector('div.x').classList.add('rotate30');
    document.querySelector('div.z').classList.add('rotate150');
  }, 70);

  setTimeout(function() {
    document.querySelector('div.x').classList.add('rotate45');
    document.querySelector('div.z').classList.add('rotate135');
  }, 120);
}

function closeMenu() {
  const burger = document.querySelector('div.burger');
  const x = document.querySelector('div.x');
  const z = document.querySelector('div.z');
  const circle = document.querySelector('div.circle');
  const menuItems = document.querySelectorAll('.menu2-menus li');
  const body = document.querySelector('body');
  const menu2 = document.querySelector('.menu2-menus');

  body.style.overflow = "";
  body.style.touchAction = "auto";
  menu2.style.display = "none";

  burger.classList.remove('open');
  x.classList.remove('rotate45');
  x.classList.add('rotate30');
  z.classList.remove('rotate135');
  z.classList.add('rotate150');
  circle.classList.remove('expand');
  menuItems.forEach(function(li) {
    li.classList.remove('animate');
  });

  setTimeout(function() {
    x.classList.remove('rotate30');
    z.classList.remove('rotate150');
  }, 50);

  setTimeout(function() {
    document.querySelector('div.y').style.display = 'block';
    const elements = document.querySelectorAll('div.x, div.y, div.z');
    elements.forEach(function(el) {
      el.classList.remove('collapse');
    });
  }, 70);
}


};

export const headerPhoneScreen = () => {
  hamburgermenu();
};