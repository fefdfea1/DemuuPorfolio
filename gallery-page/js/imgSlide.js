export const imgSlide = () => {
  const slides = document.querySelector('.slides');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let position = -30;

  prevBtn.addEventListener('click', () => {
    if (position < 10) {
      position = position + 20;
    } else {
      position = -70;
    }
    slides.style.transform = 'translateX(' + position + '%)';
  });

  nextBtn.addEventListener('click', () => {
    if (position > -70) {
      position = position -20;
    } else {
      position = 10;
    }
    
    slides.style.transform = 'translateX(' + position + '%)';
  })
}