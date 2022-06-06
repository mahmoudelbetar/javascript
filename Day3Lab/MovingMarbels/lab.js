var images = document.getElementsByTagName("img");
var time1;
var time2;
var i = 0;
var j = 0;

function start() {
    images[i].setAttribute("src", "b2.jpeg");
    i++;
    if (i == 5) {
        i = 0;
    }
    time1 = setTimeout(start, 1000);
    time2 = setTimeout(function() {
        images[j].setAttribute("src", "b1.jpeg");
        j++;
        if (j == 5) {
            j = 0;
        }
    }, 1010);
}

function stop() {
    clearTimeout(time1);
    clearTimeout(time2);
    i = i;
    j = j;
}