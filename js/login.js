function validateForm()
{
	/* validar los campos requeridos */
	if (!validateName() || !validateLastName() || !validateEmail())
	{
		jsShow("commentPrompt");
		producePrompt("Formulario debe estar validado para poder registrarte", "commentPrompt", "red");
		setTimeout(function(){jsHide("commentPrompt");}, 2000);
	}	
	else
	{
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

/* Envia Mensaje al usuario */
function producePrompt(message, promptLocation, color)
{
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
}

/* Convierte primera letra en mayúscula */
function firstToUpperCase(_texto)
{
	var result = _texto[0].toUpperCase() + _texto.slice(1);
	var mayus = result.split(" ");
	return result;
}

/* Valida Nombre */
function validateName()
{
	var inputName = document.getElementById("commentName");
	var name =  inputName.value;

	inputName.value = firstToUpperCase(name);

	if (name.length == 0)
	{
		producePrompt("Tu Nombre es requerido", "commentNamePrompt", "#fff");
		return false;
	}
	else if (!name.match(/^[A-Z][a-z]*[a-zA-Z]$/)) 
	{
		producePrompt("Compruebe que su Nombre contenga SOLO caracteres de la A-Z", "commentNamePrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Bienvenido(a) " + name, "commentNamePrompt", "white")
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
		producePrompt("Tu Apellido es requerido", "commentLastNamePrompt", "#fff");
		return false;
	}
	else if (!lastName.match(/^[A-Z][a-z]*[a-zA-Z]$/)) 
	{
		producePrompt("Compruebe que su Apellido contenga SOLO caracteres de la A-Z", "commentLastNamePrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Apellido Válido ✔", "commentLastNamePrompt", "white");
		return true;
	}	
}

/* Valida Email*/
function validateEmail()
{
	var email = document.getElementById("commentEmail").value;
	if (email.length == 0)
	{
		producePrompt("Correo Electrónico es requerido", "commentEmailPrompt", "#fff");
		return false;
	}
	else if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) 
	{
		producePrompt("Compruebe que el Correo Electrónico contenga un formato válido. Ej: name@domain.com", "commentEmailPrompt", "#ffff4d", " #ff6666");
		return false;
	}
	else 
	{
		producePrompt("Correo Electrónico Válido ✔", "commentEmailPrompt", "white");
		return true;
	}
}


// Cargar primero el DOM para ejecutar 
document.addEventListener ('DOMContentLoaded', 
	function showTooltip()
{
	var inputs = document.getElementsByTagName("input");
	for (var i=0; i<inputs.length; i++)
	{
		// Prueba para ver si el span existe primero
		if (inputs[i].parentNode.getElementsByTagName("span")[0]) 
		{
			// Si el span existe, en el enfoque mostrar el texto del span
			inputs[i].onfocus = function () 
			{
				this.parentNode.getElementsByTagName("span")[0].style.display = "inline";
			}
			// Cuando se retira el foco del span, ocultar el texto del span
			inputs[i].onblur = function () 
			{
				this.parentNode.getElementsByTagName("span")[0].style.display = "none";
			}
		}
	}

addEventListener('DOMContentLoaded', showTooltip);
});