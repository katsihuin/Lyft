function initSignUp() {

    var flag = document.getElementById("flag");
    var dialCode = document.getElementById("dialCode");
    
    var getFlag = localStorage.getItem('country',flag);
	var getDialCode = localStorage.getItem('dialCode',dialCode);
    
    flag.src = getFlag;
    dialCode.textContent = getDialCode;
    
}

/*function getCountry()
{
    var inputCountry = country.value;
	localStorage.setItem('country', inputCountry);
}*/