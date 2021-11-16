//import{userLogin, loginWhitGoogle} from "../lib/firebase.js";
export const login = () => {
    window.location.hash = '/firtpage';
    const loginPage = `
    
    <section class ="containerall">
    <header>
      
       <div class= "containerTitle">
         <img class="containerLogo" src="imagenes/logo4.png">
         <p class="title">Easy &nbsp eggie</p>
        </div>
     </header>
     <main class= "mainContainer">
       <form class= "formContainer">
         <img class="imgclass"src="imagenes/icons8-email2.png">
         <input class ="inputone" id="correoElectronico" type="text" placeholder="Correo Electronico">
         <img class="imgclasstwo"src="imagenes/icons8-cand.png">
         <input class ="inputtwo" id="contrasena" type="password" placeholder="Contraseña">
          <p class="get">¿Olvidaste tu Contraseña?</p>
          <button class="loginbtn"type="button">Iniciar Sesion</button>
         <p class="get">Ingresar con</p>
         </form>
         <button  class="btngoogle" type="button" title="Ingresar con Google" ><img src="imagenes/icons8-logoo.png"></button>
       <button class="startbtn" type="button">
        <a href='#/registerPage'>Registrarse</a></button>
     </main>
   </section>`

   return loginPage;
}
