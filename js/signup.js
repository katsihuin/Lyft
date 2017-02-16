function initSignUp() {

	let navbar = Array.from(document.getElementsByClassName('countries_phone_select>div>ul>li>a'));

	for (var i=0; i<navbar.length; i++)
		{
			navbar.addEventListener("click", getCountry)
		}
}

function getCountry()
{
    var inputCountry = country.value;
	localStorage.setItem('country', inputCountry);
}