import { deletePost, editPost, auth, likepost } from "../lib/index.js";

//import { readData } from "../lib";

export const look = (box) => {

  const postNewPage = document.querySelector("#lookPage");
  postNewPage.innerHTML = "";
  const lookConten = (rest) => {
    console.log(rest);
    const carry = `
              <div class="watchPost">
                <div class="conteinerUser">
                   
                    <p><img class="userpost" src="./imagenes/iconUser.png"/>${rest.task.data.name === null ? "Desconocido" : rest.task.data.name}</p>
                </div>
                <textarea class="nameLook" id="postLook"  readonly>${rest.task.data.nombreRecetas}</textarea>
                <textarea class="ingLook" id="postLook" cols="1" rows="8"  readonly>${rest.task.data.ingredientes}</textarea>
                <textarea class="postLook" id="postLook" cols="1" rows="13" readonly>${rest.task.data.recetas}</textarea>
                
                <div class="contentButtons">
                    <button class="btn-like like" value="${rest.task.id}">
                      <img class="likepost" src="./imagenes/icons-like.png"/>
                    </button>
                    <p class="number" id="counter-likes"> ${rest.task.data.numberLike} me gusta</p>
               
                `;
    const carryTwo = `
             `;
    let carryThree = "";
    if (rest.task.data.userId === auth.currentUser.uid) {
      carryThree = `
                    <div class="buttonsContent">
                        <button class="icon-pencil edit"value=${rest.task.id}></button>
                        <button class="icon-bin delete" value=${rest.task.id}></button>
                        <button class="save" id="${rest.task.id}-save">save</button>
                   </div>
            </div>`;
    }
    postNewPage.innerHTML += carry + carryThree + carryTwo;
  }
  box.forEach(lookConten);
 
//borrar post
  const btnDelete = postNewPage.querySelectorAll('.icon-bin');
  btnDelete.forEach((delate) => {
    delate.addEventListener('click', () => {
      const confirmDelete = confirm('¿Estás seguro de eliminar este Post?');
      if (confirmDelete == true) { deletePost(delate.value); }

    })
  
  })
  //editar post
  const btnEdit = document.querySelectorAll('.icon-pencil');
  btnEdit.forEach((edit) => {
    edit.addEventListener('click', () => {
      const currentName = document.querySelector('.nameLook');
      const currentIngr = document.querySelector('.ingLook');
      const currentPost = document.querySelector('.postLook');
      currentName.removeAttribute("readonly");
      currentIngr.removeAttribute("readonly");
      currentPost.removeAttribute("readonly");
      const btnsave = document.querySelector(`#${edit.value}-save`)
      btnsave.style.display = "block"
      btnsave.addEventListener("click", () => {
        const nombreRecetas = currentName.value;
        const ingredientes = currentIngr.value;
        const recetas = currentPost.value;
        editPost(edit.value, nombreRecetas, ingredientes, recetas);
        btnsave.style.display = "none"
        currentName.setAttribute("readonly", "readonly");
        currentIngr.setAttribute("readonly", "readonly");
        currentPost.setAttribute("readonly", "readonly");

      })

    });
 
     })
    //dar like a los post
     const btnLike = postNewPage.querySelectorAll('.like');
      btnLike.forEach((like) => {
       like.addEventListener('click', () => {
         const userId = auth.currentUser.uid;
         likepost (like.value, userId); //deberiamos mandarle el id del usuario que dio like
       });
     });

  return look;
};

