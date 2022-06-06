var timeOut;
var current = 1;
var images = ["c.png", "javascript.png", "sql.jpg"];
var image = document.getElementById("image");
var back = document.getElementById("back");
var next = document.getElementById("next");
var play = document.getElementById("play");
var stop = document.getElementById("stop");

function backSlide() {
    current--;
    if (current < 0) {
        current = images.length - 1;
        image.setAttribute("src", images[current]);
    } else {
        image.setAttribute("src", images[current]);
    }
}

function nextSlide() {
    current++;
    if (current > images.length - 1) {
        current = 0;
        image.setAttribute("src", images[current]);
    } else {
        image.setAttribute("src", images[current]);
    }
}

function playSlide() {
    image.setAttribute("src", images[current]);
    current++;
    if (current > images.length - 1) current = 0;
    timeOut = setTimeout(playSlide, 2000);
}

function stopSlide() {
    clearTimeout(timeOut);
}