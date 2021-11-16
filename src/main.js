import {router} from './lib/routers.js';
router();

window.addEventListener("load", () => {
    router(window.location.hash);
});
window.addEventListener("hashchange", () => {
    router(window.location.hash);
});