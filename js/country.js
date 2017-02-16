function initCountry() 
{
	let country = Array.from(document.getElementsByClassName('div.countries_phone_select>div>ul>li>a'));

	for (var i=0; i<country.length; i++)
		{
			country.addEventListener('click', getCountry)
		}
}

function getCountry()
{
    var inputCountry = country.value;
	localStorage.setItem('country', inputCountry);
}