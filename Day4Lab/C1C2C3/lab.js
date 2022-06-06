// C1

function twoParameters(a, b) {
    try {
        if (arguments.length < 2 || arguments.length > 2) throw Error("number of parameters should not exceed or less than two parameters!");
    } catch (error) {
        console.log(error);
    }
}

twoParameters(1, 2, 3);
twoParameters(2);

// ================================================ //

// C2

function add(arr) {
    var sum = 0;
    try {
        if (arguments.length != 0) {
            for (var i = 0; i < arr.length; i++) {
                if (isNaN(arr[i])) throw Error("input must be numbers");
                else {
                    sum += arr[i];
                }
            }
        } else throw Error("arguments must be on or more!");
        console.log(sum);
    } catch (error) {
        console.log(error);
    }
}

add("m", "a", "h");
add();
add([12, 16, 42, 56, 20]);

// =================================================== //

// C3

function reverseArray(a, b, c, d, e) {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
    }
    return arr.reverse();
}

console.log(reverseArray(12, 54, 20, 44, 3));

var reversedArray = function(x, y, z, w) {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
    }
    return arr.reverse();
}

var result = reverseArray(56, 2, 16, 80);
console.log(result);