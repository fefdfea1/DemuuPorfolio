import { initCaroselUl } from "./slideAnimation.js";
import {downArrow } from "./downArrow.js";
import {portfolioLogo} from "./portfolioSVGLogo.js";

const init = () => {
  initCaroselUl();
  downArrow();
	portfolioLogo();
};
init();