var i = 0;
var txt = 'Your Message Will be Displayed Character by Character :) few seconds and this window will terminate...';

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    } else {
        setTimeout(function() {
            window.close();
        }, 1000);
    }
}

function openWindow() {
    window.open("demo.html", "", "width=500; height=300");
    //typeWriter();
}