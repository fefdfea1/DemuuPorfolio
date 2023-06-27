import { initCaroselUl } from "./slideAnimation.js";
import {downArrow } from "./downArrow.js";
import {portfolioLogo} from "./portfolioSVGLogo.js";
import {scrollAction} from "./scrollAction.js";

const init = () => {
  initCaroselUl();
  downArrow();
	portfolioLogo();
  scrollAction();
};
init();