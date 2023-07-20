import { section2Animation } from "./section2Js/section2Entry.js";
const mainJs = document.querySelector('script[src="./main.js"]');
let timer;
let timeId;
function scroll() {
  window.onload = () => {
    const sections = document.querySelectorAll(".section");
    const sectionCount = sections.length;

    let startY = 0;
    let endY = 0;
    let eventListenerBySize;
    let isTouchMove = false; // 터치 슬라이드 여부를 확인하기 위한 플래그 변수

    if (window.innerWidth > 768) {
      eventListenerBySize = "mousewheel";
    } else {
      eventListenerBySize = "touchmove";
    }

    const handleScroll = (event) => {
      event.preventDefault();
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta;
        } else if (event.detail) delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let currentSectionIndex = -1;

        // Find the index of the currently visible section
        for (let i = 0; i < sectionCount; i++) {
          const rect = sections[i].getBoundingClientRect();
          if (
            rect.top >= 0 &&
            window.getComputedStyle(sections[i]).display !== "none"
          ) {
            currentSectionIndex = i;
            break;
          }
        }

        // Scroll down: Move to the next section
        if (delta < 0) {
          if (currentSectionIndex < sectionCount - 1) {
            moveTop +=
              sections[currentSectionIndex + 1].getBoundingClientRect().top;
          }
        }
        // Scroll up: Move to the previous section
        else if (delta > 0) {
          if (currentSectionIndex > 0) {
            moveTop +=
              sections[currentSectionIndex - 1].getBoundingClientRect().top;
          }
        }

        window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
      }, 200);
    };

    window.addEventListener(eventListenerBySize, handleScroll, {
      passive: false,
    });
    window.addEventListener(
      "touchstart",
      (event) => {
        startY = event.touches[0].clientY;
        isTouchMove = false; // 터치 시작 시 플래그 초기화
      },
      { passive: false }
    );
    window.addEventListener(
      "touchmove",
      (event) => {
        event.preventDefault();
        endY = event.touches[0].clientY;
        isTouchMove = true; // 터치 이동 시 플래그 설정
      },
      { passive: false }
    );
    window.addEventListener("touchend", () => {
      if (!isTouchMove) return; // 터치 이동이 없을 경우 스크롤 작동하지 않음

      const delta = endY - startY;
      let moveTop = window.scrollY;
      let currentSectionIndex = -1;

      // Find the index of the currently visible section
      for (let i = 0; i < sectionCount; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (
          rect.top >= 0 &&
          window.getComputedStyle(sections[i]).display !== "none"
        ) {
          currentSectionIndex = i;
          break;
        }
      }

      // Swipe up: Move to the next section
      if (delta > 0) {
        if (currentSectionIndex > 0) {
          moveTop +=
            sections[currentSectionIndex - 1].getBoundingClientRect().top;
        }
      }
      // Swipe down: Move to the previous section
      else if (delta < 0) {
        if (currentSectionIndex < sectionCount - 1) {
          moveTop +=
            sections[currentSectionIndex + 1].getBoundingClientRect().top;
        }
      }

      window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
    });
  };
}

export const scrollAction = () => {
  scroll();
};

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
