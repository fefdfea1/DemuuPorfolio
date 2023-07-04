import { initCaroselUl } from "./section1Js/slideAnimation.js";
import {downArrow } from "./section1Js/downArrow.js";
import {portfolioLogo} from "./section2Js/portfolioSVGLogo.js";
import {scrollAction} from "./scrollAction.js";
import {section2Animation} from "./section2Js/section2Entry.js";
import {cursorAction} from "./cursor.js";

const init = () => {
  initCaroselUl();
  downArrow();
	portfolioLogo();
  scrollAction();
  section2Animation();
  cursorAction();
};
init();