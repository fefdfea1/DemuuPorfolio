const redirectURL = "http://demuu.dothome.co.kr/mobile/index.html";
const breakpoint = 1024;

function redirectOn(){
  if (window.innerWidth <= breakpoint) window.location.replace(redirectURL);
}

export const redirect = () => {
  redirectOn();
};