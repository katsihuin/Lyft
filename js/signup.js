function initSignUp() {

	let navbar = Array.from(document.getElementsByClassName('countries_phone_select>div>ul>li>a'));

	for (var i=0; i<navbar.length; i++)
		{
			navbar.addEventListener("click", obtenerPais)
		}
}
/*function init()
{
	var lista=document.getElementById("lista-paises");
	var links=lista.getElementsByTagName("a");
	
	for (var i=0; i<links.length; i++)
	{
		links.addEventListener("click", obtenerPais)
	}
}

function obtenerPais(evt)
{
	localStorage.setItem("pais", evt.target)
}
/*http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_toggle

var arrFromList = Array.prototype.slice.call(y);
//or as per AntonB's comment:
var arrFromList = [].slice.call(y);

countries_phone_select*/