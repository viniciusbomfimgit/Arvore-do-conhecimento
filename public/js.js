var nFolha = 0 //numero no fim do id, para fins de diferenciacao
var nTronco = 0 
var nRamo = 0

function enviar(){
    var nomeValue = document.querySelector(".input-name").value;
	var nomeValue2 = document.querySelector(".input-name2").value;
    var formValue = {                                 
        name: nomeValue,
		name2: nomeValue2,
	}
	var id = ""
	var classe = ""

	//avaliar tipo de competencia
	if(nomeValue == "Tronco"){
		id="idTronco" + nTronco; nTronco++; classe = "Tronco"
		var newDiv = document.createElement('div');
		newDiv.id = id;
		newDiv.className = classe;
		document.getElementsByTagName('body')[0].appendChild(newDiv);
		newDiv.innerHTML = nomeValue2
	}
	
	if(nomeValue == "Ramo"){
		id = "idRamo" + nRamo; nRamo++; classe= "Ramo"
		var newDiv = document.createElement('div');
		newDiv.id = id;
		newDiv.className = classe;
		document.getElementsByTagName('body')[0].appendChild(newDiv);
		newDiv.innerHTML = nomeValue2
	}
	
	
	if(nomeValue == "Folha"){
		 id = "idFolha" + nFolha; nFolha++; classe = "Folha"
		 var newDiv = document.createElement('div');
		newDiv.id = id;
		newDiv.className = classe;
		document.getElementsByTagName('body')[0].appendChild(newDiv);
		newDiv.innerHTML = nomeValue2
	}			

	//criar div da competencia
	
}
	
	