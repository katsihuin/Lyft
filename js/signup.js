function initSignUp() {

    var flag = document.getElementById("flag");
    var dialCode = document.getElementById("dialCode");
    
    var getFlag = localStorage.getItem('country',flag);
	var getDialCode = localStorage.getItem('dialCode',dialCode);
    
    flag.src = getFlag;
    dialCode.textContent = getDialCode;
    
}

//Si otro cosa que no sea un número es presionado

function keyPresss(event) {
    if (event.which < 48 || event.which > 57){
        event.preventDefault();
    }
}

document.getElementsByTagName('input').addEventListener('keydown', keyPresss);
/*function getCountry()
{
    var inputCountry = country.value;
	localStorage.setItem('country', inputCountry);
}*/