import{createU} from "../lib/index.js";

export const register = () =>{
 window.location.hash = '/registerPage';
 
 const divRegister = document.createElement("div");

 divRegister.className = 'div';


const pageRegister  = `

<div class="allcontainer">
<div class="registerForm">
<h1>Registrate</h1>
</div>
<div class="inputForm">
<p>Ingrese su nombre</p>
<input type="text" id="nameRegister">
<p>Igrese su email</p>
<input type="email" id="mailR" placeholder="correo@example.com">
<p>Ingrese una contraseña</p>
<input type="password" id="passwordR" placeholder="max 8 caract alfanumericos">
<p>Confirma tu contraseña</p>
<button type="submit" id="btnRegister" class="botonregister">Crear Cuenta</button>
</div>
</div> `


divRegister.innerHTML= pageRegister;

divRegister.querySelector('#btnRegister').addEventListener('click', () => {
    const email = document.querySelector('#mailR').value;
    const password = document.querySelector('#passwordR').value;
    createU(email, password);
  });
return divRegister;

};


