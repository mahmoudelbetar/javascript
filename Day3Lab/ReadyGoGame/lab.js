// var red = document.getElementById("red");
// var yellow = document.getElementById("yellow");
// var green = document.getElementById("green");
// var stat = document.getElementById("status");

// function start() {
//     setTimeout(function() {
//         green.className = "bg-secondary";
//         red.className = "bg-danger";
//         stat.innerHTML = "Stop";
//         stat.className = "text-danger";
//     }, 5000);
//     setTimeout(function() {
//         red.className = "bg-secondary";
//         yellow.className = "bg-warning";
//         stat.innerHTML = "Steady";
//         stat.className = "text-warning";
//     }, 10000);
//     setTimeout(function() {
//         yellow.className = "bg-secondary";
//         green.className = "bg-success";
//         stat.innerHTML = "GO";
//         stat.className = "text-success";
//     }, 15000);
//     setTimeout(start, 20000);
// }

var ball = document.querySelectorAll('div');
var outText = document.getElementById('status')
var activeLight = 0;

setInterval(changeLight, 1000);

function changeLight() {
    ball[activeLight].className = 'ball';
    activeLight++;

    if (activeLight == 1) {
        outText.innerHTML = "Ready";
        outText.style.color = "yellow"
    } else if (activeLight == 2) {
        outText.innerHTML = "Go";
        outText.style.color = "green"
    }

    if (activeLight > 2) {
        activeLight = 0;
        outText.innerHTML = "Stop";
        outText.style.color = "red";
    }
    var currentLight = ball[activeLight];
    currentLight.classList.add(currentLight.getAttribute('color'));
}