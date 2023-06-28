function entry() {
  window.onload = () => {
    const elm = document.querySelectorAll('.section');
    const elmCount = elm.length;
    elm.forEach((item, index) => {
      item.addEventListener('mousewheel', (event) => {
        event.preventDefault();
        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta;
        } else if (event.detail)
          delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let elmSelector = elm[index];

        // wheel down: move to next section
        if (delta < 0) {
          if (elmSelector !== elmCount - 1) {
            try {
              moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
              console.log(`현재 section은 ${index + 1}번째입니다.`); // 현재 section 번호 출력
            } catch (e) {}
          }
        }
        // wheel up: move to previous section
        else {
          if (elmSelector !== 0) {
            try {
              moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
              console.log(`현재 section은 ${index - 1}번째입니다.`); // 현재 section 번호 출력
            } catch (e) {}
          }
        }

        const body = document.querySelector('html');
        window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
      });
    });
  }
}

export const section2Entry = () => {
  entry();
};