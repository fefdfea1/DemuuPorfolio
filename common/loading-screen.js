function loadingTxt() {
  document.querySelector("body").style.overflowY = "hidden";
  const loadingTxtNth = document.querySelectorAll(".loading-screen div");
  const loadingTxtLength = document.querySelectorAll(".loading-screen div").length;

  for (let i = 0; i < loadingTxtLength; i++) {
    setTimeout(() => {
      loadingTxtNth[i].style.transform = "translateY(0)";
    }, i * 150);

    setTimeout(() => {
      
      document.querySelector(".loading-screen").style.opacity = "0";
      setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
      }, 1000)
      document.querySelector("body").style.overflowY = "";
    },2000)
  }
}

export const loadingScreen = () => {
  loadingTxt();
};