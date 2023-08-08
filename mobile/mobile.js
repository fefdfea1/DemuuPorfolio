// section1
import { portfolioLogo } from "../main-page/section2Js/portfolioSVGLogo.js";
import { sec1Entry } from "./js/sec1Entry.js";

// section2
import { sec2Entry } from "./js/sec2Entry.js";

const init = () => {
  // section1
  portfolioLogo();
  sec1Entry();

  // section2
  sec2Entry();
}
init();