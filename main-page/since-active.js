export function sinceActive(currentSlide){
  const sinceItemBar = document.querySelectorAll(".item-bar");
  const sinceItemTxt = document.querySelectorAll(".item-txt");

  sinceItemBar[currentSlide - 1].classList.add("item-bar-active");
  sinceItemTxt[currentSlide - 1].classList.add("item-txt-active");
}

export function removeSinceActive(currentSlide, scaleDownTiming){
  const sinceItemBar = document.querySelectorAll(".item-bar");
  const sinceItemTxt = document.querySelectorAll(".item-txt");

  setTimeout(() => {
    sinceItemBar[currentSlide - 1].classList.remove("item-bar-active");
    sinceItemTxt[currentSlide - 1].classList.remove("item-txt-active");
    console.log(currentSlide);
  }, scaleDownTiming + 800)
}
