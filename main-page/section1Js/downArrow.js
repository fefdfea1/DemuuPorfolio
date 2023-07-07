const arrow = document.querySelector('.down-arrow i');

function animateArrow() {
  setTimeout(() => {
    arrow.style.transform = 'translateY(-15%)';
    setTimeout(() => {
      arrow.style.transform = 'translateY(0)';
      animateArrow(); // 재귀적으로 함수 호출하여 무한 반복
    }, 1000);
  }, 1000);
}

export const downArrow = () => {
  animateArrow();
};