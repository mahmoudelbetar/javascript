//Math Object Task

var radius = parseInt(prompt("Enter radius value: "));
confirm(`Area of the Circle = ${Math.PI*radius*radius}`);

var sqrt = parseInt(prompt("Enter a value to calculate its square root: "));
confirm(`sqaure root of ${sqrt} = ${Math.sqrt(sqrt)}`);

var angle = parseInt(prompt("Enter an angle to calculate its cos: "));
confirm(`cos of ${angle} = ${Math.cos(angle)}`);

/*========================================================================= */

//Bottle Game Task

var persons = [];
var numberOfPersons = prompt("Enter a number of persons to add them: ");
for (var i = 0; i < numberOfPersons; i++) {
    persons[i] = prompt(`Enter person number: ${i+1}`);
}

function choose(persons) {
    var twoPersons = [];
    for (var i = 0; i < 2; i++) {
        twoPersons[i] = persons[Math.floor(Math.random() * 10)];
        while (twoPersons[i + 1] == twoPersons[i]) {
            twoPersons[i] = persons[Math.floor(Math.random() * 10)];
        }
    }
    return twoPersons;
}

var chosenPersons = choose(persons);
console.log(chosenPersons);

/*========================================================================= */

// Character Game Task

var sentence = prompt("Enter any sentence you want: ");
var letter = prompt("Enter a letter you want to search for in the sentence: ");
sentence = sentence.split("");

function searchIndexOfLetter(sentence, letter) {
    var index = [];
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] == letter) {
            index[i] = i;
        }
    }
    return index;
}

var positions = searchIndexOfLetter(sentence, letter);
console.log(positions);

/*========================================================================= */

// Fizz Buzz Game

var num = parseInt(prompt("Enter a number: "));

function fizzBuzz(number) {
    if (number % 3 == 0) {
        if (number % 15 == 0) console.log("Fizz Buzz");
        else console.log("Fizz");
    } else if (number % 5 == 0) {
        if (number % 15 == 0) console.log("Fizz Buzz");
        else console.log("Buzz");
    }
}

fizzBuzz(num);

/*========================================================================= */

// Who Am I Game

var yon = prompt("Do you Fly ?");
if (yon.toLowerCase() == "y" || yon.toLocaleLowerCase() == "yes") {
    yon = prompt("Are you Wild ?");
    if (yon.toLowerCase() == "y" || yon.toLocaleLowerCase() == "yes") {
        console.log("Eagle");
    } else if (yon.toLowerCase() == "n" || yon.toLocaleLowerCase() == "no") {
        console.log("Parrot");
    }
} else if (yon.toLowerCase() == "n" || yon.toLocaleLowerCase() == "no") {
    yon = prompt("Do you live under sea ?");
    if (yon.toLowerCase() == "y" || yon.toLocaleLowerCase() == "yes") {
        yon = prompt("Are you Wild ?");
        if (yon.toLowerCase() == "y" || yon.toLocaleLowerCase() == "yes") {
            console.log("Shark");
        } else if (yon.toLowerCase() == "n" || yon.toLocaleLowerCase() == "no") {
            console.log("Dolphin");
        }
    } else if (yon.toLowerCase() == "n" || yon.toLocaleLowerCase() == "no") {
        yon = prompt("Are you Wild ?");
        if (yon.toLowerCase() == "y" || yon.toLocaleLowerCase() == "yes") {
            console.log("Lion");
        } else if (yon.toLowerCase() == "n" || yon.toLocaleLowerCase() == "no") {
            console.log("Cat");
        }
    }
}