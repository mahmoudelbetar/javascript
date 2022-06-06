// Area an Premieter
function Shape(width, height) {
    this.width = width || 0;
    this.height = height || 0;
}
Shape.prototype.area = function() {
    console.log("Area = " + this.width * this.height);
}
Shape.prototype.premieter = function() {
    console.log("Premiter = " + 2 * (this.width + this.height));
}
Shape.prototype.toString = function() {
    console.log("width = " + this.width + " height = " + this.height + " Area = " + this.area() + " Premieter = " + this.premieter());
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
}

var rectangle = new Rectangle(30, 70);
rectangle.area();
rectangle.premieter();

// function Rectangle(width, height) {
//     this.width = width || 0;
//     this.height = height || 0;
// }
// var rectangle = new Rectangle(40, 50);

// shape.area.call(rectangle);
// shape.premieter.call(rectangle);

// Rectangle.prototype.area = function() {
//     return this.width * this.height;
// }
// Rectangle.prototype.premieter = function() {
//     return 2 * (this.width + this.height);
// }
// Rectangle.prototype.toString = function() {
//     console.log("width = " + this.width + " height = " + this.height + " Area = " + this.area() + " Premieter = " + this.premieter());
// }
// var rec1 = new Rectangle(20, 40);
// var rec2 = new Rectangle(30, 50);
// console.log(rec1.area());
// console.log(rec2.premieter());
// rec1.toString();

var count = 0;
class CountObjects {
    constructor() {
        count++;
    }
    Count() {
        return count;
    }
}

var obj = new CountObjects();
var obj = new CountObjects();
var obj = new CountObjects();
var obj = new CountObjects();
var obj = new CountObjects();
var obj = new CountObjects();
var obj = new CountObjects();
var obj = new CountObjects();
var obj = new CountObjects();
var obj = new CountObjects();

console.log("there are " + obj.Count() + " objects");

// ========================================================================================== //

// B. Event Object

// B.1

this.addEventListener('keypress', function(detect) {
    var ascii = detect.key;
    if (detect.shiftKey) {
        this.alert("You pressed " + ascii + " , ASCII = " + ascii.charCodeAt(0) + ", SHIFT KEY pressed!");
    } else if (detect.altKey) {
        this.alert("You pressed " + ascii + " , ASCII = " + ascii.charCodeAt(0) + ", ALT KEY pressed!");
    } else if (detect.ctrlKey) {
        this.alert("You pressed " + ascii + " , ASCII = " + ascii.charCodeAt(0) + ", CTRL KEY pressed!");
    } else {
        this.alert("You pressed " + ascii + " , ASCII = " + ascii.charCodeAt(0));
    }
});


// B.2

this.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});