/*
  텍스트 나오고 없어지는 속도 조정하고 싶으면 css에 .Text h1 transition 조절
  하고 만약 텍스트가 더 늘어나거나 줄어들면 아래 switch에 case를 늘려주거나
  줄여야함
*/

export const changeTextAnimation = (currentSlide) => {
    const getAllText = document.querySelectorAll('.Text p');
    switch( currentSlide ){
      case 0:
        firstAndlastAnimation();
        break
      case 1:
        TextAnimation(currentSlide);
        break;
      case 2:
        getAllText[currentSlide].classList.add('activeAnimation');
        TextAnimation(currentSlide);
        break;
      case 3:
        getAllText[currentSlide].classList.add('activeAnimation');
        TextAnimation(currentSlide);
        break;
      case 4:
        firstAndlastAnimation(currentSlide);
        break;
  
    }
  }
  
  //가장 처음 , 첫번째 ,마지막을 제외한 애니메이션 처리
  const TextAnimation = (currentSlide) => {
    const getAllText = document.querySelectorAll('.Text p');
    getAllText[currentSlide].classList.remove('restAnimation')
    getAllText[currentSlide].classList.add('activeAnimation')
    setTimeout(() => {
      getAllText[currentSlide].classList.add('deActiveAnimation');
    },4000)
    setTimeout(() => {
      getAllText[currentSlide].classList.add('restAnimation');
      getAllText[currentSlide].classList.remove('deActiveAnimation');
      getAllText[currentSlide].classList.remove('activeAnimation');
    },5000)
  }
  
  const firstAndlastAnimation = () => {
    const getAllText = document.querySelectorAll('.Text p');
    getAllText[0].classList.remove('restAnimation')
    getAllText[0].classList.add('activeAnimation')
    setTimeout(() => {
      getAllText[0].classList.add('deActiveAnimation');
    },4000)
    setTimeout(() => {
      getAllText[0].classList.add('restAnimation');
      getAllText[0].classList.remove('deActiveAnimation');
      getAllText[0].classList.remove('activeAnimation');
    },5000)
  }
  
  window.addEventListener('load',() => {
    document.body.classList.remove('preload');
  })