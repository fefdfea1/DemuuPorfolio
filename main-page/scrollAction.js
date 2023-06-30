import { section2Animation } from "./section2Js/section2Entry.js";

let timer;
function scroll() {
  window.onload = () => {
    const elm = document.querySelectorAll(".section");
    const elmCount = elm.length;
    let sectionPosition = 0;
    
    elm.forEach((item, index) => {
      item.addEventListener("mousewheel", (event) => {
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
          let elmSelector = elm[index];

          // wheel down : move to next section
          if (delta < 0) {
            if (elmSelector !== elmCount - 1) {
              try {
                moveTop =
                  window.scrollY +
                  elmSelector.nextElementSibling.getBoundingClientRect().top;
                  sectionPosition = Math.min(sectionPosition+1, elmCount - 1);
              } catch (e) {}
            }
          }
          // wheel up : move to previous section
          else {
            if (elmSelector !== 0) {
              try {
                moveTop =
                  window.scrollY +
                  elmSelector.previousElementSibling.getBoundingClientRect().top;
                  sectionPosition = Math.max(sectionPosition - 1, 0);
              } catch (e) {}
            }
          }
          
          section2Animation(sectionPosition);
          window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
          //마우스 인식 시간 설정
        }, 200);
      });
    });
  };
}

export const scrollAction = () => {
  scroll();
};