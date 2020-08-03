function Login() {
  var done=0;
  var usuario = document.getElementsByName('usuario')[0].value;
  usuario=usuario.toLowerCase();
  var senha= document.getElementsByName('senha')[0].value;
  seha=senha.toLowerCase();
  if (usuario=="admin" || usuario=="Matheus Santos"  && senha=="admin") {
    window.location="Home2.html";
    done=1;
  }
  if (done==0) { 
  //  alert("Dados incorretos, tente novamente"); 
  }
}



function abrePopup()
{
	window.open("projeto.html", "nome", "width= 1550, left=0, right=0  height= 1500, scrollbars= no, location=no, directories=no, status=no, menubar=no, toolbar=no', resizable= no");
}

function validateForm() {
  var x = document.forms["login-inputs"]["login"].value;
  if (x == null || x == "") {
    alert("Existem campos a serem preenchidos");
    return false;
  }
  else return true;
}

/*
var login = document.getElementById("login"),
var password = document.getElementById("password");
function validatePassword(){
  if(password.value != login.value) {
    password.setCustomValidity("Senhas diferentes!");
    return false;
  } else {
    password.setCustomValidity('');
    return true;
  }
}
password.onchange = validatePassword;
login.onkeyup = validatePassword;
*/
