import {router} from './lib/routers.js';
import {lookout} from './lib/index.js';


window.addEventListener("load", () => {
    router(window.location.hash);
    lookout();
});
window.addEventListener("hashchange", () => {
    router(window.location.hash);
    lookout();
});