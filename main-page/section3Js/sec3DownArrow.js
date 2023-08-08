const arrow = document.querySelector('.section3-down-arrow i');

function sec3ArrowMove(){
  setTimeout(() => {
    arrow.style.transform = 'translateY(-55%)';
    setTimeout(() => {
      arrow.style.transform = 'translateY(0)';
      sec3ArrowMove();
    },1000)
  }, 1000)

  setTimeout(() => {
    document.querySelector(".section3-down-arrow").style.opacity = "1";
  }, 10000);
}

export const sec3DownArrow = () => {
  sec3ArrowMove();
};