// all
import { cursorAction } from "./cursor.js";
import { scrollAction } from "./scrollAction.js";

// section1
import { initCaroselUl } from "./section1Js/slideAnimation.js";
import { downArrow } from "./section1Js/downArrow.js";

// section2
import { section2Animation } from "./section2Js/section2Entry.js";
import { sec2DownArrow } from "./section2Js/sec2DownArrow.js";
import {portfolioLogo} from "./section2Js/portfolioSVGLogo.js";

// section3


const init = () => {
  initCaroselUl();
  downArrow();
  scrollAction();
  section2Animation();
  cursorAction();
  sec2DownArrow();
  portfolioLogo();
};
init();
