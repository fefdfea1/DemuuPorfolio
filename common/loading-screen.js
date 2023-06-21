function loadingTxt() {
  const body = document.querySelector("body");
  const loadingTxtNth = document.querySelectorAll(".loading-screen div");
  const loadingTxtLength = document.querySelectorAll(".loading-screen div").length;

  body.style.overflowY = "hidden";
  body.style.touchAction = "none";

  for (let i = 0; i < loadingTxtLength; i++) {
    setTimeout(() => {
      loadingTxtNth[i].style.transform = "translateY(0)";
    }, i * 150);

    setTimeout(() => {
      
      document.querySelector(".loading-screen").style.opacity = "0";
      setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
      }, 1000)
      body.style.overflowY = "";
      body.style.touchAction = "auto";
    },2000)
  }
}

export const loadingScreen = () => {
  loadingTxt();
};