var success = document.getElementById("success");
var error = document.getElementById("error");
var h1 = document.getElementById("h1");
var p = document.getElementById("p");
var alertMessage = document.getElementById("alert");


success.addEventListener('click', function() {
    alertMessage.style.display = "block";
    h1.innerHTML = "Success";
    h1.className = "text-success text-center";
    p.innerHTML = "This is Success Message";
    p.className = "text-success text-center";
});


error.addEventListener('click', function() {
    alertMessage.style.display = "block";
    h1.innerHTML = "Error";
    h1.className = "text-danger text-center";
    p.innerHTML = "This is Error Message";
    p.className = "text-danger text-center";
});