function init() {
	var button = document.getElementById('countries_phone_select');
	button.addeventlistener ('click', onButtonClick);

	if(localStorage.getItem('country'))
	{
		setCountry ();
	}
}

function setCountry() {

}