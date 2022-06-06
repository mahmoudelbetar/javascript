var form = document.getElementById("form");
var up = document.getElementById("up");
var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var message = document.getElementById("message");
var error = document.getElementById("error");
var regex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
var valid;

error.style.display = "none";

up.addEventListener('click', function() {
    window.scrollTo(0, 0);
});


fullName.oninput = function() {
    if (fullName.value == '' || fullName.value.length < 10) {
        fullName.style.border = "1px solid red";
    } else {
        fullName.style.border = "1px solid green";
    }
}

email.oninput = function() {
    if (email.value == '' || !email.value.match(regex)) {
        email.style.border = "1px solid red";
        valid = email.value;
    } else {
        email.style.border = "1px solid green";
    }
}

password.oninput = function() {
    if (password.value == '' || password.value.length < 8) {
        password.style.border = "1px solid red";
    } else {
        password.style.border = "1px solid green";
    }
}

message.oninput = function() {
    if (message.value == '' || message.value.length < 20) {
        message.style.border = "1px solid red";
    } else {
        message.style.border = "1px solid green";
    }
}

form.addEventListener('submit', function(event) {
    if (fullName.value == '' || email.value == '' || message.value == '' || password.value == '') {
        error.style.display = "block";
        error.innerHTML += fullName.value == '' ? "name is required<br>" : "";
        error.innerHTML += email.value == '' ? "email is required<br>" : "";
        error.innerHTML += password.value == '' ? "password is required<br>" : "";
        error.innerHTML += message.value == '' ? "message is required<br>" : "";
        fullName.style.border = "1px solid red";
        email.style.border = "1px solid red";
        message.style.border = "1px solid red";
        password.style.border = "1px solid red";
        event.preventDefault();
    }
});