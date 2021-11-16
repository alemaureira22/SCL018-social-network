export const register = () =>{
 window.location.hash = '/registerPage';
 const divRegister = document.createElement("div");


const pageRegister  = `

<div class="allcontainer">
<div class="registerForm">
<h1>Registrate</h1>
</div>
<div class="inputForm">
<p>Ingrese su nombre</p>
<input type="text" id="nameRegister">
<p>Igrese su email</p>
<input type="email" id="mailRegister" placeholder="correo@example.com">
<p>Ingrese una contraseña</p>
<input type="password" id="passwordRegister" placeholder="max 8 caract alfanumericos">
<p>Confirma tu contraseña</p>
<input type="password" id="passwordRegister" placeholder="max 8 caract alfanumericos">
</div>
<div>
<button id="btnRegister" class="botonregister">Crear Cuenta</button>
</div>
</div> `

divRegister.innerHTML= pageRegister;

return pageRegister;

}
