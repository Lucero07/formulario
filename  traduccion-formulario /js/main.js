function translate(){
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var remenber = document.getElementsByTagName('span')[0];
  var button = document.getElementsByClassName('btn')[0];

  title.innerHTML ="Por favor inicia sesión";
  email.placeholder ="Correo Electrónico";
  password.placeholder = "Contraseña";
  remenber.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar Sesión";
}
translate();


function listaDatos(inputEmail,inputPassword){
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;

  document.getElementById("titulo").innerHTML="Datos del Formulario:"
  document.getElementById("dato").innerHTML=  "El correo es: "+ email+"<br> La contraseña es: " + password;
}
listaDatos();
