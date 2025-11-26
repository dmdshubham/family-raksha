function validateAlphabet(event) {
    console.log('validateAlphabet', event)
    var charCode = event.which || event.keyCode;
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode == 32) {
        return true;
    } else {
        event.preventDefault();
        return false;
    }
}

function validateNumericWithLength(event) {
    var inputField = event.target;
    var charCode = event.which || event.keyCode;
    
    // Allow only numeric input
    if (charCode >= 48 && charCode <= 57) {
        // Check if the current length is less than maxLength
        if (inputField.value.length < 10) {
            return true;
        }
    }
    event.preventDefault();
    return false;
}
const name = document.getElementById('your-name');
const phone = document.getElementById('phone');
if(name){
    document.getElementById("your-name").addEventListener('keypress', validateAlphabet);
}
if(phone){
    document.getElementById("phone").addEventListener('keypress', validateNumericWithLength);    
}



