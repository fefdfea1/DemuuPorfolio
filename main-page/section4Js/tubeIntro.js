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
              
              console.log(pathValue);
              if(pathValue <= 30) clearInterval(interval);
            },16);
          });
        
          if (window.innerWidth > 1400) {
            tubeIntroSVG.style.transform = 'translateY(-82%)';
          } else if (window.innerWidth > 1200) {
            tubeIntroSVG.style.transform = 'translateY(-74%)';
          } else if (window.innerWidth > 992) {
            tubeIntroSVG.style.transform = 'translateY(-70%)';
          } else if (window.innerWidth > 768) {
            tubeIntroSVG.style.transform = 'translateY(-60%)';
          } else if (window.innerWidth > 576) {
            tubeIntroSVG.style.transform = 'translateY(-48%)';
          } else {
            tubeIntroSVG.style.transform = 'translateY(-40%)';
          }
        },50)
      };
      section4Animate();


      
      const tube = document.querySelector('.tube-intro');
      const blogBtn = document.querySelector('.spin-bx');
      setTimeout(() => {
        tube.style.filter = 'blur(3px)';
        for (let i = 0; i < 4; i++) {
          const blogTitle = document.querySelector(`.bt-${i+1}`);
          const delay = 200 * (i + 1);

          setTimeout(() => {
            blogTitle.style.transform = 'translateX(0)';
            
            setTimeout(() => {
              blogBtn.style.display = 'block';
              setTimeout(() => {blogBtn.style.opacity = '1';},500)
            }, 1500);
          }, delay);
        }
      }, 4500)

    }
  } 
})();