function initSignUp() {

    var flagDisplay = document.getElementById("flag");
    var dialCode = document.getElementById("dialCode");
    
    var getFlag = localStorage.getItem('country');
	var getDialCode = localStorage.getItem('dialCode');
    
    flagDisplay.src = getFlag;
    dialCode.textContent = getDialCode;    
}

var inputPhoneNumber = document.getElementById("phoneNumber");

function onBtnNext() {
    
    localStorage.setItem('phoneNumber', inputPhoneNumber.value);
    
    var emptyNumberAlert = document.getElementById("numberAlert");
    
    if(inputNumber.value == '') {
        emptyNumberAlert.innerHTML = "<p class='text-center'>Número telefónico requerido</p>"
    } else {
        emptyNumberAlert.innerHTML = '';
        randomNumber();
        location.href = 'login.html';
    }
}

function randomNumber() {

    var fixed = "LAB-";
    var minNumber = 100;
    var maxNumber = 999;
    var randomNumber = Math.floor((Math.random()*maxNumber)+minNumber);
    var labRandomNumber = (fixed += randomNumber);
    alert("Su código único de usuario es: " + labRandomNumber);
}


function keyPresss(event) {
    //Si otro cosa que no sea un número es presionado
    if (event.which < 48 || event.which > 57){
        event.preventDefault();
    }
}

/*document.getElementsByTagName('input').addEventListener('keydown', keyPresss);
function getCountry()
{
    var inputCountry = country.value;
	localStorage.setItem('country', inputCountry);
}*/