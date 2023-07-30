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
              
              if(pathValue <= 0) clearInterval(interval);
            },16);
          });
        
          tubeIntroSVG.style.transform = 'translateY(-82%)';
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