let timeId;
const mainJs = document.querySelector('script[src="./main.js"]');
// 현재 스크롤 위치와 구하기
function getScrollPosition() {
  let scrollPosition = Math.floor(window.scrollY || document.documentElement.scrollTop);
  
  // section2 position
  let section2Top = Math.floor(window.scrollY + document.querySelector("#section2").getBoundingClientRect().top);
  // section3 position
  let section3Top = Math.floor(window.scrollY + document.querySelector("#section3").getBoundingClientRect().top);
  section2Animation(scrollPosition);

  if (!timeId) {
    timeId = setTimeout(() => {
      timeId = null;
      if (scrollPosition === section2Top) {
        const section2CDN = document.createElement("script");
        const section2CDN2 = document.createElement("script");
        const section2Script = document.createElement("script");
        section2Script.src = `./section2Js/portfolioSVGLogo.js`;
        // section2Script.type = "module";
        section2CDN.src = `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js`;
        section2CDN2.src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js`;
        mainJs.after(section2Script);
        mainJs.after(section2CDN);
        mainJs.after(section2CDN2);
      } else {
        const findSection2Script = document.querySelector(
          'script[src="./section2Js/portfolioSVGLogo.js"]'
        );
        const findSection2CDN = document.querySelector(
          'script[src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"]'
        );
        const findSection2CDN2 = document.querySelector(
          'script[src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js"]'
        );
        if (findSection2Script !== null) {
          document.body.removeChild(findSection2Script);
          document.body.removeChild(findSection2CDN);
          document.body.removeChild(findSection2CDN2);
        }
      }
      if (scrollPosition === section3Top) {
        const section3CDN = document.createElement("script");
        const section3Script = document.createElement("script");
        section3Script.src = `./section3/section3.js`;
        // section3Script.type = "module";
        section3CDN.src = `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`;
        mainJs.after(section3CDN);
        mainJs.after(section3Script);
      } else {
        const findSection3Script = document.querySelector(
          'script[src="./section3/section3.js"]'
        );
        const findSection3CDN = document.querySelector(
          'script[src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"]'
        );

        if (findSection3Script !== null && findSection3CDN) {
          document.body.removeChild(findSection3Script);
          document.body.removeChild(findSection3CDN);
        }
      }
    }, 10);
  }
}

getScrollPosition();

window.addEventListener("scroll", getScrollPosition);