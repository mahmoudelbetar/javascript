var mywindow;

function openNewWindow() {
    mywindow = window.open("lab.html", "", "width=200, height=100");
    mywindow.focus();
    var h = 11;
    var w = 10;
    var i = 1;
    var j = 1;
    mywindow.resizeTo(100, 100);

    function repeat() {
        j = 0;
        myInterval = setInterval(function() {
            mywindow.moveBy(w, h);
            // w += 10;
            // h += 11;
            i++;
            if (i == 58) {
                myInterval2 = setInterval(function() {
                    clearInterval(myInterval);
                    mywindow.moveBy(-w, -h);
                    j++;
                    if (j == 58) {
                        i = 0;
                        clearInterval(myInterval2);
                        repeat();
                    }
                }, 100);
            }
        }, 100);
    }
    repeat();
}

function stop() {
    mywindow.focus();
    clearInterval(myInterval);
    clearInterval(myInterval2);
}