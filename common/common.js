import { loadingScreen } from "./loading-screen.js";
import {headerPhoneScreen} from "./header.js";

const init = () => {
  loadingScreen();
  
  window.addEventListener('load', () => {
    headerPhoneScreen();
  })
};
init();