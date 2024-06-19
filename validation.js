var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var numberError=document.getElementById('number-error');
var massageError=document.getElementById('massage-error');
var submitError=document.getElementById('submit-error');

// validate name
function validateName(){
    var name=document.getElementById('fname').value;

    if(name.length == 0){
        nameError.innerHTML='name is required';
        nameError.style.color = 'red';
        return false;
    }
    else if(!name.match(/^[A-Za-z]{4,}/)){
        nameError.innerHTML='First Name must contain only letters & least 4 charecter';
        nameError.style.color = 'red';
        return false;
    }
    else{
        nameError.innerHTML='valid';
        nameError.style.color = 'green';
        return true;
    }
}

// validate email
function validateEmail(){
    var email=document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML='email is required';
        emailError.style.color = 'red';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ )){
        emailError.innerHTML='Invalid Email';
        emailError.style.color = 'red';
        return false;
    }
    else{
        emailError.innerHTML='valid';
        emailError.style.color = 'green';
        return true;
    }
}


// validate number
function validateNumber(){
    var num=document.getElementById('number').value;

    if(num.length == 0){
        numberError.innerHTML='mobile num is required';
        numberError.style.color = 'red';
        return false;
    }
    if(num.length != 10){
        numberError.innerHTML='mobile num should be 10 digits';
        numberError.style.color = 'red';
        return false;
    }
    if(!num.match(/^[0-9]{10}$/)){
        numberError.innerHTML='only digits';
        numberError.style.color = 'red';
        return false;
    }
    else{
        numberError.innerHTML='valid';
        numberError.style.color = 'green';
        return true;
    }
}

// validate massages
function validateSubject(){
    var sub=document.getElementById('subject').value;
    var required=30;
    var left=required-sub.length;

    if(left > 0){
        massageError.innerHTML='atleast '+left+' more charecter required';
        massageError.style.color = 'red';
        return false;
    }
    else{
        massageError.innerHTML='';
        massageError.style.color = 'green';
        return true;
    }
}

// only submit if validation is correct
function validateForm(){
	if(!validateName() || !validateEmail() || !validateNumber() || !validateSubject()){
		submitError.innerHTML = "form is incompleate!!!";
        submitError.style.color = 'red'; 
		return false;
	}
    else{
        submitError.innerHTML='form is valid';
        submitError.style.color = 'green';
        return true;
    }
}