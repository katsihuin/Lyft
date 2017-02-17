function initSignUp() {

    var flag = document.getElementById("flag");
    var dialCode = document.getElementById("dialCode");
    
    var getFlag = localStorage.getItem('location',countryFlag);
	var getDialCode = localStorage.getItem('intDialCode',countryDialCode);
    
    flag = getFlag.src;
    dialCode = getDialCode.textContent;
    
}

/*function getCountry()
{
    var inputCountry = country.value;
	localStorage.setItem('country', inputCountry);
}*/