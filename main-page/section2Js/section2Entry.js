export const section2Animation = (sectionPosition) => {
  const portfolioLogo = document.querySelector('.portfolio-logo');
  const portfolioName = document.querySelector('.portfolio-logo-name');
  const triangle = document.querySelector('.triangle');
  
  if (sectionPosition == 1) {
    setTimeout(() => {
      triangle.style.display = 'block';
      portfolioLogo.style.width = '45%';
      setTimeout(() => {
        portfolioName.style.opacity = '1';
      }, 700)
    }, 2000)
  }
}