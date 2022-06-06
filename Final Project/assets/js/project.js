var up = document.getElementById("up");
var productBtn = document.getElementById("products");
var carBtn = document.getElementById("cars");
var fruitBtn = document.getElementById("fruits");
var laptopBtn = document.getElementById("laptops");
var images = document.querySelectorAll(".card img");
var titles = document.querySelectorAll(".card h4");
var descriptions = document.querySelectorAll(".card p");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var slideImage = document.getElementById("slideImage");
var sliderImages = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];
var current = 1;

var fruits = {
    img: ["images/fruit1.jpeg", "images/fruit2.jpg", "images/fruit3.jpg"],
    title: ["watermelon", "pineapple", "banana and grabes"],
    description: ["Tasty", "expensive", "healthy"]
}
var products = {
    img: ["images/product1.jpg", "images/product2.jpg", "images/product3.jpg"],
    title: ["headphone", "watch", "camera"],
    description: ["50 $", "150 $", "200 $"]
}
var cars = {
    img: ["images/car1.jpg", "images/car2.jpg", "images/car3.jpg"],
    title: ["Car 1", "Car 2", "Car 3"],
    description: ["Model", "Speed", "Fast"]
}
var laptops = {
    img: ["images/laptop1.jpg", "images/laptop2.jpg", "images/laptop3.jpg"],
    title: ["Laptop1", "Laptop2", "Laptop3"],
    description: ["1000 $", "1500 $", "2000 $"]
}


up.addEventListener('click', function() {
    window.scrollTo(0, 0);
});

fruitBtn.addEventListener('click', function() {
    for (var i = 0; i < images.length; i++) {
        images[i].src = fruits.img[i];
        titles[i].innerHTML = fruits.title[i];
        descriptions[i].innerHTML = fruits.description[i];
    }
});

carBtn.addEventListener('click', function() {
    for (var i = 0; i < images.length; i++) {
        images[i].src = cars.img[i];
        titles[i].innerHTML = cars.title[i];
        descriptions[i].innerHTML = cars.description[i];
    }
});

productBtn.addEventListener('click', function() {
    for (var i = 0; i < images.length; i++) {
        images[i].src = products.img[i];
        titles[i].innerHTML = products.title[i];
        descriptions[i].innerHTML = products.description[i];
    }
});

laptopBtn.addEventListener('click', function() {
    for (var i = 0; i < images.length; i++) {
        images[i].src = laptops.img[i];
        titles[i].innerHTML = laptops.title[i];
        descriptions[i].innerHTML = laptops.description[i];
    }
});


next.addEventListener('click', function() {
    slideImage.src = sliderImages[current];
    if (current == sliderImages.length - 1) current = 0;
    else current++;
});

prev.addEventListener('click', function() {
    current--;
    if (current == -1) {
        current = sliderImages.length - 1;
        slideImage.src = sliderImages[current];
    } else slideImage.src = sliderImages[current];
});