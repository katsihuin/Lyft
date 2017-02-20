function initSignUp() {

    var flag = document.getElementById("flag");
    var dialCode = document.getElementById("dialCode");
    
    var getFlag = localStorage.getItem('country',flag);
	var getDialCode = localStorage.getItem('dialCode',dialCode);
    
    flag.src = getFlag;
    dialCode.textContent = getDialCode;
    
}

function onCode() {

    var lab = "LAB-";
    var aleatorio = Math.floor((Math.random()*999)+100);
    var concat = (lab += aleatorio);
    alert("Tu código de usuario es : " + concat);
}


function keyPresss(event) {
    //Si otro cosa que no sea un número es presionado
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