export const imgSlide = () => {
  const slides = document.querySelector('.slides');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  const slide1 = document.querySelector('.si1'),
        slide2 = document.querySelector('.si2'),
        slide3 = document.querySelector('.si3'),
        slide4 = document.querySelector('.si4'),
        slide5 = document.querySelector('.si5');

  const bright1 = document.querySelector('.bi1'),
        bright2 = document.querySelector('.bi2'),
        bright3 = document.querySelector('.bi3'),
        bright4 = document.querySelector('.bi4'),
        bright5 = document.querySelector('.bi5'),
        bright = document.querySelector('.bright::after' , 'bright::before');

  let position = -30;

  prevBtn.addEventListener('click', () => {
    if (position < 10) {
      position = position + 20;
    } else {
      position = -70;
    }
    slides.style.transform = 'translateX(' + position + '%)';
    inactive();

    bright.style.animation = 'bright .3s ease infinite';
    setTimeout(() => {
      bright.style.animation = 'none';
    }, 300);
  });

  nextBtn.addEventListener('click', () => {
    if (position > -70) {
      position = position -20;
    } else {
      position = 10;
    }
    slides.style.transform = 'translateX(' + position + '%)';
    inactive();
  });

  function inactive(){
    if (position == -70) {
      slide1.classList.remove('inactive');
      slide2.classList.remove('inactive');
      slide3.classList.remove('inactive');
      slide5.classList.remove('inactive');
      slide4.classList.add('inactive');

      slide5.classList.add('slide-hover');
      slide1.classList.remove('slide-hover');
      slide2.classList.remove('slide-hover');
      slide3.classList.remove('slide-hover');
      slide4.classList.remove('slide-hover');

      bright5.classList.add('bright');
      bright1.classList.remove('bright');
      bright2.classList.remove('bright');
      bright3.classList.remove('bright');
      bright4.classList.remove('bright');
    }  
    else if (position == -50) {
      slide1.classList.remove('inactive');
      slide2.classList.remove('inactive');
      slide4.classList.remove('inactive');
      slide3.classList.add('inactive');
      slide5.classList.add('inactive');

      slide4.classList.add('slide-hover');
      slide1.classList.remove('slide-hover');
      slide2.classList.remove('slide-hover');
      slide3.classList.remove('slide-hover');
      slide5.classList.remove('slide-hover');

      bright4.classList.add('bright');
      bright1.classList.remove('bright');
      bright2.classList.remove('bright');
      bright3.classList.remove('bright');
      bright5.classList.remove('bright');
    } 
    else if (position == -30) {
      slide1.classList.remove('inactive');
      slide3.classList.remove('inactive');
      slide5.classList.remove('inactive');
      slide2.classList.add('inactive');
      slide4.classList.add('inactive');

      slide3.classList.add('slide-hover');
      slide1.classList.remove('slide-hover');
      slide2.classList.remove('slide-hover');
      slide4.classList.remove('slide-hover');
      slide5.classList.remove('slide-hover');

      bright3.classList.add('bright');
      bright1.classList.remove('bright');
      bright2.classList.remove('bright');
      bright4.classList.remove('bright');
      bright5.classList.remove('bright');
    } 
    else if (position == -10) {
      slide2.classList.remove('inactive');
      slide4.classList.remove('inactive');
      slide5.classList.remove('inactive');
      slide1.classList.add('inactive');
      slide3.classList.add('inactive');

      slide2.classList.add('slide-hover');
      slide1.classList.remove('slide-hover');
      slide3.classList.remove('slide-hover');
      slide4.classList.remove('slide-hover');
      slide5.classList.remove('slide-hover');

      bright2.classList.add('bright');
      bright1.classList.remove('bright');
      bright3.classList.remove('bright');
      bright4.classList.remove('bright');
      bright5.classList.remove('bright');
    } else if (position == 10) {
      slide1.classList.remove('inactive');
      slide3.classList.remove('inactive');
      slide4.classList.remove('inactive');
      slide5.classList.remove('inactive');
      slide2.classList.add('inactive');

      slide1.classList.add('slide-hover');
      slide2.classList.remove('slide-hover');
      slide3.classList.remove('slide-hover');
      slide4.classList.remove('slide-hover');
      slide5.classList.remove('slide-hover');

      bright1.classList.add('bright');
      bright2.classList.remove('bright');
      bright3.classList.remove('bright');
      bright4.classList.remove('bright');
      bright5.classList.remove('bright');
    }
  }
  inactive();
}