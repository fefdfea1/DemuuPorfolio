// ------------section1 img slider----------
var slides = document.querySelector('.img-slides'),
slide = document.querySelectorAll('.img-slides li'),
currentIdx = 0,
slideCount = slide.length,
slideWidth = 200,
slideMargin = 30

makeClone();

function makeClone(){
  for(var i=0; i<slideCount; i++) {
    var cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.appendChild(cloneSlide);
  }

  for(var i=slideCount-1; i>=0; i--) {
    var cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
}

function updateWidth(){
  var currentSlides = document.querySelectorAll('.img-slides');
  var newSlideCount = currentSlides.length;

  var newWidth = (slideWidth+slideMargin)*newSlideCount-slideMargin+'px';
  slides.style.width = newWidth;
}
function setInitialPos(){
  var initialTranslateValue = -(slideWidth+slideMargin)*slideCount;
  slides.style.transform = 'translateX(' +initialTranslateValue+ 'px)';
}

// ------------section2 txt slider----------
document.addEventListener('DOMContentLoaded', ()=>{
  var interval = window.setInterval(rollingCallback, 4000);
})
function rollingCallback(){
  document.querySelector('.txt-slide-container .prev').classList.remove('prev');

  //.current -> .prev
  let current = document.querySelector('.txt-slide-container .current');
  current.classList.remove('current');
  current.classList.add('prev');

  //.next -> .current
  let next = document.querySelector('.txt-slide-container .next');
  if(next.nextElementSibling == null){
      document.querySelector('.txt-slide-container ul li:first-child').classList.add('next');
  }else{
      next.nextElementSibling.classList.add('next');
  }
  next.classList.remove('next');
  next.classList.add('current');
}