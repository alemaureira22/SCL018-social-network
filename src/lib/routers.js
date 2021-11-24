import {login} from '../pagesShow/firtpage.js';
import {register} from '../pagesShow/registerPage.js';
import { post } from "../pagesShow/postPage.js";
import { look } from "../pagesShow/lookPost.js";
//import { onAuth } from "../lib/index.js"



export const router = (hash) => {
  const containerRoot = document.getElementById("root")
  containerRoot.innerHTML = "";
    if (hash === "#/" || hash === "/" || hash === "#" || hash === ""){
        
    containerRoot.appendChild(login());
  } else if (hash === "#/firtpage") {
    containerRoot.appendChild(login());
  } else if (hash === "#/registerPage") {
    containerRoot.appendChild(register());
  } else if (hash === "#/postPage") {
    containerRoot.appendChild(post());
  } else if (hash === "#/lookPost") {
    containerRoot.appendChild(look());
  }

}