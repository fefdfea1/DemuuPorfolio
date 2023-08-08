export const tubeIntro = (() => {
  let hasRun = true;

  return (scrollPosition) => {
    let section4Top = Math.floor(window.scrollY + document.querySelector("#section4").getBoundingClientRect().top);

    if (scrollPosition === section4Top && hasRun) {
      hasRun = false;

      const tubeIntro = document.querySelectorAll('.tube-intro path');
      const tubeIntroSVG = document.querySelector('.tube-intro svg');
      let pathValue = 7149;

      const section4Animate = () => {
        setTimeout(() => {
          tubeIntro.forEach(path => {
          
            const interval = setInterval(() => {
              pathValue -= 5;
              path.style.strokeDashoffset = pathValue;
              
              if(pathValue <= 30) clearInterval(interval);
            },16);
          });
        
          if (window.innerWidth > 1400) {
            tubeIntroSVG.style.transform = 'translateY(-82%)';
          } else {
            tubeIntroSVG.style.transform = 'translateY(-74%)';
          }
        },50)
      };
      section4Animate();
      
    }
  } 
})();