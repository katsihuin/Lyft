function validateForm()
{
    var valid = true;
    
    valid = valid && validateName();

    valid = valid && validateLastName();

    valid = valid && validateEmail();

    valid = valid && validateInfo();

    return valid;

    if (!validateName() || !validateLastName() || !validateEmail() || !validateInfo())
	{
		jsShow("commentPrompt");
		producePrompt("Formulario debe estar validado para poder registrarte", "commentPrompt", "red");
		setTimeout(function(){jsHide("commentPrompt");}, 2000);
	}	
	else
	{
        var valid;
        var sendForm=document.getElementById("sendForm");
      	sendForm.href="app.html";
		jsShow("commentPrompt");
		producePrompt("Formulario Validado Exitósamente", "commentPrompt", "green");
	}
}

/* Muestra mensaje validación */
function jsShow(id)
{
	document.getElementById(id).style.display="block";
}

/* Oculta mensaje validación */
function jsHide(id)
{
	document.getElementById(id).style.display="none";
}
/* Envia Mensaje al usuario*/
function producePrompt(message, promptLocation, color)
{
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
    
}

function firstToUpperCase(_texto)
{
	var result = _texto[0].toUpperCase() + _texto.slice(1);
	var mayus = result.split(" ");
	return result;
}

/* Valida Nombre*/
function validateName()
{
	var inputName = document.getElementById("commentName");
	var name =  inputName.value;

	inputName.value = firstToUpperCase(name);

	if (name.length == 0)
	{
		producePrompt("Tu Nombre es requerido", "commentNamePrompt", "red");
		return false;
	}
	else if (!name.match(/^[A-Z][a-z]*[a-zA-Z]$/)) 
	{
		producePrompt("Compruebe que su Nombre contenga SOLO caracteres de la A-Z", "commentNamePrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Bienvenido(a) " + name, "commentNamePrompt", "green")
	}	

}

/* Valida Apellido*/
function validateLastName()
{
	var inputLastName = document.getElementById("commentLastName");
	var lastName =  inputLastName.value;

	inputLastName.value = firstToUpperCase(lastName);

	if (lastName.length == 0)
	{
		producePrompt("Tu Apellido es requerido", "commentLastNamePrompt", "red");
		return false;
	}
	else if (!lastName.match(/^[A-Z][a-z]*[a-zA-Z]$/)) 
	{
		producePrompt("Compruebe que su Apellido contenga SOLO caracteres de la A-Z", "commentLastNamePrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Apellido Válido ✔", "commentLastNamePrompt", "green");
		return true;
	}	
}

/* Valida Email*/
function validateEmail()
{
	var email = document.getElementById("commentEmail").value;
	if (email.length == 0)
	{
		producePrompt("Correo Electrónico es requerido", "commentEmailPrompt", "red");
		return false;
	}
	else if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) 
	{
		producePrompt("Compruebe que el Correo Electrónico contenga un formato válido. Ej: name@domain.com", "commentEmailPrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Correo Electrónico Válido ✔", "commentEmailPrompt", "green");
		return true;
	}
}

/* Valida Terminos */
function validateInfo()
{
	var info = document.getElementById("commentInfo");
	if (info.checked=true) 
	{
		producePrompt("¡Gracias por aceptar los Terminos de Usuario!", "commentInfoPrompt", "green");
		return true;
	}
}