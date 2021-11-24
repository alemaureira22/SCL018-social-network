import{createU} from "../lib/index.js";

export const register = () =>{
   window.location.hash = '/registerPage';
   const divRegister = document.createElement("div");
   divRegister.className = 'div';
  const pageRegister  = `
<img class="containerfondo" src="imagenes/Diseño fondo.png">
<div class="allcontainer">
<div class="registerForm">
<header>
<img class="icons"src="imagenes/logo4.png">
<p class="logo">Easy &nbsp eggie</p>
</header>
<form class="inputForm">
  <h1>Registrate</h1>
    <img class="imgclas"src="imagenes/usuario.png">
    <input type="text" id="nameRegister" class="registers"placeholder="Ingrese su nombre">
    <img class="imgclas"src="imagenes/icons8-email2.png">
    <input type="email" id="mailR" class="registers" placeholder="correo@example.com">
    <img class="imgclas"src="imagenes/icons8-cand.png">
     <input type="password" id="passwordR" class="registers" placeholder="max 8 caract alfanumericos">
     <br>
     <button type="submit" id="btnRegister" class="botonregister">Crear Cuenta</button>
   <p> Al registrarte, aceptas nuestras condiciones de uso y politicas de privacidad</p>
   <p> ¿Ya tienes cuenta?<a class ="link" href="#/firtpage">Inicia sesión</a></p>
</form>
</div> `


divRegister.innerHTML= pageRegister;

divRegister.querySelector('#btnRegister').addEventListener('click', () => {
    const email = document.querySelector('#mailR').value;
    const password = document.querySelector('#passwordR').value;
    createU(email, password);
  });
return divRegister;

};


