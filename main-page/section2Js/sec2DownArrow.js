const arrow = document.querySelector('.section2-down-arrow i');

function downArrowMove () {
  setTimeout(() => {
    arrow.style.transform = 'translateY(-55%)';
    setTimeout(() => {
      arrow.style.transform = 'translateY(0)';
      downArrowMove();
    },1000)
  }, 1000)
}

export const sec2DownArrow = () => {
  downArrowMove();
};
