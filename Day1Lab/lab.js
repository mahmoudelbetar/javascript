// // Task 1.1

// var message = prompt("Enter a message: ");
// for (var i = 1; i <= 6; i++) {
//     document.writeln(`<h${i}>${message}</h${i}>`);
// }

// // ============================================ //

// // Task 1.2

// var sum = 0;
// var num = [];
// var i = 0;
// while (sum != 100) {
//     num[i] = parseInt(prompt(`Enter number ${i+1}: `));
//     sum += num[i];
//     if (num[i] == 0) {
//         confirm("0 should not be found!");
//         break;
//     }
//     i++;
// }
// console.log(`numbers that has been added together are: ${num}`);
// console.log(`Sum = ${sum}`);

// // ============================================== //

// // Task 2.1

// var count = 0;
// var word = prompt("Enter a word: ");
// var characters = word.split("");
// for (var i = 0; i < word.length; i++) {
//     if (characters[i] == "e") count++;
// }
// console.log(`number of "e" = ${count}`);

// // ============================================ //

// // Task 2.2

// var palindrome = prompt("Enter a word: ");
// var reversedPalindrome = palindrome.split("").reverse().join("");
// if (palindrome == reversedPalindrome) console.log(`The word ${palindrome} is palindrome!`);
// else console.log(`The word ${palindrome} is NOT palindrome!`);

// // ============================================= //

// // Task 2.3

// var Name = prompt("Enter your name: ");
// while (!isNaN(Name) && Name == "") {
//     Name = prompt("Enter your name: ");
// }
// var phoneNumber = prompt("Enter your phone number: ");
// while (phoneNumber.length != 8 || isNaN(phoneNumber)) {
//     phoneNumber = prompt("Enter your phone number: ");
// }
// var mobileRegex = /\b(011|010|012)/ig;
// var mobileNumber = prompt("Enter your mobile number: ");
// while (mobileNumber.length != 11 || isNaN(mobileNumber) || !mobileNumber.match(mobileRegex)) {
//     mobileNumber = prompt("Enter your mobile number: ");
// }
// var emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*@\D+.\D+/ig;
// var email = prompt("Enter your email: ");
// while (!email.match(emailRegex)) {
//     email = prompt("Enter your email: ");
// }
// document.write("User Info: ");
// document.write("<hr/>");
// var color = prompt("Enter your favourite color: ");
// var today = new Date();
// document.write(`
//     <span style="color:${color}">Welcome dear guest </span>${Name}<br/>
//     <span style="color:${color}">Your telephone number is </span>${phoneNumber}<br/>
//     <span style="color:${color}">Your mobile number is </span>${mobileNumber}<br/>
//     <span style="color:${color}">Your email is </span>${email}<br/>
//     <span style="color:${color}">Today is </span>${today.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}<br/>
// `);

// // ==================================================== //

// // Task 3.1

// var Numbers = [];
// for (var i = 0; i < 3; i++) {
//     Numbers[i] = parseFloat(prompt(`Enter number ${i+1}`));
// }
// document.writeln(`<span style="color:red">Sum of 3 Values </span>${Numbers[0]} + ${Numbers[1]} + ${Numbers[2]} = ${Numbers[0]+Numbers[1]+Numbers[2]}<br/>`);
// document.writeln(`<span style="color:red">Multiplication of 3 Values </span>${Numbers[0]} * ${Numbers[1]} * ${Numbers[2]} = ${Numbers[0]*Numbers[1]*Numbers[2]}<br/>`);
// document.writeln(`<span style="color:red">Division of 3 Values </span>${Numbers[0]} / ${Numbers[1]} / ${Numbers[2]} = ${(Numbers[0]/Numbers[1]/Numbers[2]).toFixed(1)}<br/>`);

// ====================================================== //

// Task 3.2

var Numbers = [];
document.writeln("Sorting");
document.writeln("<hr/>")
for (var i = 0; i < 5; i++) {
    Numbers[i] = parseInt(prompt(`Enter number ${i+1}`));
}
document.write("<span style='color:red'>You have entered:</span> ");
for (var i = 0; i < Numbers.length; i++) {
    document.write(`${Numbers[i]},`);
}
document.write("<br/>");
document.write("<span style='color:red'>Descending: </span> ");
Numbers = Numbers.sort().reverse();
for (var i = 0; i < Numbers.length; i++) {
    document.write(`${Numbers[i]},`);
}
document.write("<br/>");
Numbers = Numbers.sort();
document.write("<span style='color:red'>Ascending: </span> ");
for (var i = 0; i < Numbers.length; i++) {
    document.write(`${Numbers[i]},`);
}

// ======================================================= //