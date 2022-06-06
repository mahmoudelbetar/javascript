var fullName = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var genders = document.querySelectorAll("input[type=radio]");
var sports = document.querySelectorAll("input[type=checkbox]");
var form = document.getElementById("form");
var error = document.getElementById("error");
var span = document.createElement("span");
var list = document.getElementById("ul");

error.appendChild(list);

fullName.addEventListener('input', function() {
    if (fullName.value.length < 3 || fullName.value == '') {
        fullName.style.border = "1px solid red";
    } else {
        fullName.style.border = "1px solid green";
        error.removeChild(document.getElementById("alertName"));
    }
})

var regex = /[a-z]@[a-z].[a-z]/;
email.addEventListener('input', function() {
    if (regex.test(email.value)) {
        email.style.border = "1px solid green";
        error.removeChild(document.getElementById("alertEmail"));
    } else {
        email.style.border = "1px solid red";
        span.innerHTML += "your email is invalid";
        error.appendChild(span);
        error.style.display = "block";
    }
})

password.addEventListener('input', function() {
    if (password.value.length > 8) {
        password.style.border = "1px solid green";
    } else {
        password.style.border = "1px solid red";
        error.style.display = "block";
    }
})

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     if (fullName.value === '' || fullName.value == null) {
//         error.style.display = "block";
//         error.appendChild(span);
//         span.innerHTML += "You must enter a full name";
//     }
//     if (email.value === '' || !email.value.matches(/[a-z]@[a-z].[a-z]/)) {
//         error.style.display = "block";
//         error.appendChild(span);
//         span.innerHTML += "You must enter a valid email";
//     }
//     if (password.value === '' || password.value.length < 8) {
//         error.style.display = "block";
//         error.innerText = "you must enter a full name\n";
//     }
//     if (!(genders[0].checked) || !(genders[1].checked)) {
//         error.style.display = "block";
//         error.innerText = "you must enter a full name\n";
//     }
//     if (!(this[4].checked)) {
//         error.style.display = "block";
//         error.innerText = "you must enter a full name\n";
//     }
// });