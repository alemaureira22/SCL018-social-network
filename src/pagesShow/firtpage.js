import { whithGoogle, loginInit } from "../lib/index.js";


export const login = () => {
  window.location.hash = '/firtpage';
  const containerMainScreen = document.createElement('div');
  containerMainScreen.className = 'section';

  const loginPage = `
    <img class="containerfondo" src="imagenes/fondoimagen1.jpeg">
    <section class ="containerall">
    <section class ="usernot">
    <header>
        <img class="containerLogo" src="imagenes/logo4.png">
         <p class="title">Easy &nbsp eggie</p>
     </header>
     <main class= "mainContainer">
       <form class= "formContainer">
       <a span class="icon icon-mail2">
          <input class ="inputone" id="correoElectronico" type="text" placeholder="Correo Electronico">
       </a>
       <a span class="icon icon-lock">
         <input class ="inputtwo" id="contrasena" type="password" placeholder="Contraseña">
       </a>
          <button class="loginbtn"type="button">Iniciar Sesion</button>
        </form>
         <p class="get">Ingresar con</p>
         <button  class="btngoogle" id ="googlebtn" type="button" title="Ingresar con Google" ><img src="imagenes/icons8-logoo.png"></button>
       <button class="startbtn" type="button">
        <a href='#/registerPage'>Registrarse</a></button>
     </main>
     </div>
   </section>`
  containerMainScreen.innerHTML = loginPage

  containerMainScreen.querySelector('#googlebtn').addEventListener('click', () => {
    whithGoogle();
    window.location.hash = '#/postPage';
  });
  containerMainScreen.querySelector('.loginbtn').addEventListener('click', () => {
    const userEmail = document.querySelector('.inputone').value;
    const userPassword = document.querySelector('.inputtwo').value;
    loginInit(userEmail, userPassword);
  });
  return containerMainScreen;
}


