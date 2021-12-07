import { logOut, recet, readData } from "../lib/index.js";
//import { menuProfile } from "./profile.js";


export const post = () => {
  window.location.hash = '/postPage';
  const containerPostScreen = document.createElement('div');
  containerPostScreen.className = 'section-post';
  const pagePost = `
    <header class = "header-post">
      <figure>
       <img class="header-image" src="imagenes/imagen3.jpeg"/>
      </figure>
    </header>
   
    <nav class="container-second">
        <div class="container_left">
        <h1 class="logo-name" id="logpage">Easy &nbsp &nbsp eggie</h1>
        <img class="logo-imagen" src="imagenes/logo4.png"/>
        </div>    
    </nav>
    <main>
    <section  class= "contentBox">
    <div class="iconshome">
    <a span class="icon icon-home3" href="#postPage">Muro</a>
    <a span class="icon icon-user" href="">Perfil</a>
    <button class="returnBtn" type="submit">
    <a span class="icon icon-enter"href="#/firtpage">Cerrar sesion</a></button> 
    </div>
     
      <section id="contenedor-perfil2" class="contenedor-perfil2">
        <article class="recet">
          <input type="search" class="textarea" name="textarea" id="postt" 
            placeholder="¡Nombre de tu receta!"/>
          <input type="search" class="textarea" name="textarea" id="posttt" 
            placeholder="¡ingredientes!"/>
          <input type="search" class="textarea" name="textarea" id="post" 
            placeholder="¡Publica tu receta!"/>
            </article>
          <button class="botones-post" type="button" id="publicar">Publicar</button>
          <p class="toPost"" id="lookPage"></p>
        
  
      </section>
      <section class= "link" >
      <div class="linkId">
      <p class= "titleLink"><img class="shop" src="imagenes/icons-home.png"></a>Recomendaciones</p>
      <a href="https://danzadefogones.com/"><img src="imagenes/pag4.jpg"></a> 
      <a href="https://www.instagram.com/listadoveganochile/?hl=es"><img src="imagenes/pag3.png"></a> 
      <a href="https://veggisima.com/"><img src="imagenes/pag1.jpg"></a> 
      <a href="https://www.hazteveg.com/"><img src="imagenes/pag2.jpg"></a> 
      <a href="https://vegetarianahambrienta.wordpress.com/"><img src="imagenes/hambienta.jpg"></a> 
      <a href="https://www.lacasadelvegan.cl/"><img src="imagenes/casavegan.png"></a> 
      <a href="https://labodeguitaverde.cl/"><img src="imagenes/vodega.png"></a>
      <a href="https://www.artevegetal.cl/"><img src="imagenes/arte.png"></a>
      <a href="https://vegetarianos.guiabbb.cl/0548878/Nikol_Ivo_Caseros"><img src="imagenes/bbb.jpg"></a>
     </div>
      </section>
  
    </section>
    </main>
       </div> `;


  containerPostScreen.innerHTML = pagePost

 
  //publicar 
  containerPostScreen.querySelector('#publicar').addEventListener('click', () => {
    const numberData = document.querySelector('#postt').value;
    const postData = document.querySelector('#post').value;
    const ingredients = document.querySelector('#posttt').value;
    recet(numberData, ingredients, postData);
    document.querySelector('#post').value = "";
    document.querySelector('#postt').value = "";
    document.querySelector('#posttt').value = "";
  });
 //cerrar seccion
 containerPostScreen.querySelector('.returnBtn').addEventListener('click', () => {
  logOut();


});
readData();
  return containerPostScreen;
}


