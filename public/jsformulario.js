

var password = document.getElementById("password")
var confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
    return false;
  } else {
    confirm_password.setCustomValidity('');
    return true;
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function validateForm() {
	var x = document.forms["myForm"]["fname"].value;
	if (x == null || x == "") {
		alert("Existem campos a serem preenchidos");
		return false;
	}
	else return true;
}

function confirma(){
	if (validatePassword()==true && validateForm()==true){
	    alert("Registro efetuado com sucesso");
	}
}

function abrePopup()
{
	window.open("projeto.html", "nome", "width= 1000, height= 1000, scrollbars= no, location=no, directories=no, status=no, menubar=no, toolbar=no', resizable= no ");
}

function abrePopupTab()
{
	window.open("tabela.html", "nome", "width= 1000, height= 1000, scrollbars= no, location=no, directories=no, status=no, menubar=no, toolbar=no', resizable= no ");
}
/*

*/