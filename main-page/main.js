// all
import { cursorAction } from "./cursor.js";
import { scrollAction } from "./scrollAction.js";

// section1
import { initCaroselUl } from "./section1Js/slideAnimation.js";
import { downArrow } from "./section1Js/downArrow.js";

// section2
import { section2Animation } from "./section2Js/section2Entry.js";
import { sec2DownArrow } from "./section2Js/sec2DownArrow.js";
import { portfolioLogo } from "./section2Js/portfolioSVGLogo.js";

// section3
import { section3Intro } from "./section3Js/section3.js";
import { sec3DownArrow } from "./section3Js/sec3DownArrow.js";

// section4
import { tubeIntro } from "./section4Js/tubeIntro.js";


const init = () => {
  // all
  scrollAction();
  cursorAction();

  // section1
  downArrow();
  initCaroselUl();

  // section2
  section2Animation();
  sec2DownArrow();
  portfolioLogo();

  // section3
  section3Intro();
  sec3DownArrow();

  // section4
  tubeIntro();
};
init();
