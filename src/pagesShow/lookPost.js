//import{recet} from "../lib/index.js";

export const look = (box) => {

   const postNewPage = document.querySelector("#lookPage");
         postNewPage.innerHTML = "";
         const lookConten = (rest)  => {
            const carry = `
            <div class="watchPost">
                <textarea class="postLook" id="postLook">${rest.recetas}</textarea>
            </div> `
        postNewPage.innerHTML += carry;
         }   
    box.forEach(lookConten);
 return look;
}
