                                //  Chapter 1
// I. First Name
alert("Ebad");
// II. Last Name
alert("Rehman");
// III. Email
alert("ebad6677@gmail.com");
// IV. Phone Number
alert("03152213094");
// V. Password
alert("ebad123");

alert("You're learning JavaScript!");
alert("Welcome to JavaScript programming!");

                                //   Chapter 2

var myVariable;

var favoriteColor;
favoriteColor = "Blue";

var teamName = "The Champions";
alert(teamName);

var bestMan = "Charlie";
// Assign the variable a new string:
bestMan = "Max";

                                //  Chapter 3
var caseQty;

caseQty = 144;

var num = 9;

var total;
total = 5 + 10;


var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
// orderTotal will be 110

var myNumber = 5;
myNumber = myNumber + 10;
// myNumber will now be 15


                           //Chapter 4
var productCost = 3.45;

var nameOfBand;

var totalCost = 100;

var firstNameLastName = "JohnDoe";

// Legal Variables:

// var productCost;
// var nameOfBand;
// var totalCost;
// var firstNameLastName;
// var _privateVariable;
// var $dollarSignVar;
// var camelCaseVar;

// // Illegal Variables:

// var product cost; // Contains a space
// var 1stPlace; // Starts with a number
// var my-variable; // Contains a hyphen
// var function; // Uses a reserved keyword
// var @specialChar; // Starts with a special character other than $ or _


                             //Chapter 5

// The name of the operator is the modulus operator, and its symbol is %.

var num = 20 % 6;
// num will be 2 because 20 divided by 6 leaves a remainder of 2

var largeNum = 1000 * 2000;

var a = 50;
var b = 20;
var result = a - b;

var remainder = 10 % 3;

var num1 = 5;
var num2 = 4;
alert(num1 * num2); // Displays 20
 
                                    //Chapter 6

x += 1;
// or
x++;

x--;

var x = 50;
var y = x++;
// y will be 50

var y = 50;
var z = --y;
// z will be 49

var num = 10;
var newNum = num--;

var a = 5;
var b = a++;

var number = 7;
number++;
alert(number); // Displays 8

                               //Chapter7

var calculatedNum = 2 + (2 * 6);
// calculatedNum will be 14

var calculatedNum = (2 + 2) * 6;
// calculatedNum will be 24

var calculatedNum = (2 + 2) * (4 + 2);
// calculatedNum will be 24

var calculatedNum = ((2 + 2) * 4) + 2;
// calculatedNum will be 18

var cost = 2 + (2 * (4 + 10)); // 2 + (2 * 14) = 2 + 28 = 30

var units = (2 + 2) * 4 + 10; // (2 + 2) * 4 + 10 = 4 * 4 + 10 = 16 + 10 = 26

var pressure = (4 / 2) * 4; // (4 / 2) * 4 = 2 * 4 = 8

                                 //Chapter 8

var num = "2" + "2";
// num will be "22"

var message = "Hello," + "Dolly";
// message will be "Hello,Dolly"

alert("33" + 3);
// The alert box will display "333"

alert("Pakistan " + "Zindabad");

var concatenatedValue = "Age: " + 30;


var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;

                                 //Chapter 9

let firstName = prompt("Enter first name");

let country = prompt("Country?", "China");

var yourName = prompt("Enter Your Name");

let userInput = prompt("Please enter your response", "Default Input");

let message = "What is your favorite color?";
let defaultResponse = "Blue";
let userColor = prompt(message, defaultResponse);

let question = "What is your favorite movie?";
let defaultMovie = "Inception";
let favoriteMovie = prompt(question, defaultMovie);
alert("Your favorite movie is: " + favoriteMovie);


                                     //Chapter 10
                                     
var city = "Karachi";
if (city === "Karachi") {
  console.log("The City OF Lights");
}


if (x === y) {
    let z = prompt("Value of z?");
    // Further actions can be taken using the variable z.
  }

  
  let ZipCode = prompt("Enter ZipCode:");
if (ZipCode === "10010") {
  alert("Karachi");
} else {
  alert("Please write the correct city");
}

let x = 5;
if (x === 5) {
  x = 10;
}

                                // Chapter 11

if (a !== b) {
    // Execute this block if a is not equal to b
  }

  if (num1 >= num2) {
    // Execute this block if num1 is greater than or equal to num2
  }

  let value = 20;
if (value !== 10) {
  value = 10;
}


let score = 8;
if (score !== 10) {
  alert("Congratulations!");
}


let enteredName = prompt("Enter your first name:");
if (enteredName !== "John") {
  alert("No match");
}

                          // Chapter 12
let x = 20;
let y = 15;
 if (x >= y) {
alert("x is greater than or equal to y");
} else {
alert("x is less than y");
}

// Prompt the user to enter their marks for 5 subjects
let subject1 = parseFloat(prompt("Enter marks for subject 1:"));
let subject2 = parseFloat(prompt("Enter marks for subject 2:"));
let subject3 = parseFloat(prompt("Enter marks for subject 3:"));
let subject4 = parseFloat(prompt("Enter marks for subject 4:"));
let subject5 = parseFloat(prompt("Enter marks for subject 5:"));

// Calculate total marks and percentage
let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
let percentage = (totalMarks / 500) * 100; // Assuming each subject is out of 100

// Determine the grade based on the percentage
let grade;
if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else if (percentage >= 50) {
  grade = "D";
} else {
  grade = "F";
}

// Display the percentage and grade
alert("Your percentage is: " + percentage.toFixed(2) + "%");
alert("Your grade is: " + grade);


let a = 5; // You can change this value to test

if (a === 10) {
  alert("a is 10");
} else {
  alert("The correct value of a is " + a);
}


let city = prompt("Enter a city name:");

if (city === "Karachi") {
  alert("You entered Karachi, the City of Lights!");
} else if (city === "Lahore") {
  alert("You entered Lahore, the Heart of Pakistan!");
} else {
  alert("You entered a different city.");
}


                          // Chapter 13 
if (a === b && c === d) {
// Execute this block if both conditions are true
}

if (a === b || c !== d) {
    // Execute this block if either condition is true
  }


  if ((name === "Hamza" || name === "Arsalan") && age < 60) {
    // Execute this block if both conditions are true
  }


  let num1 = 30;
let num2 = 20;

if (num1 < num2 || num1 > num2) {
  alert("num1 is not equal to num2");
}

let firstName = "John";
let lastName = "Doe";

let inputFirstName = prompt("Enter your first name:");
let inputLastName = prompt("Enter your last name:");

if (inputFirstName === firstName && inputLastName === lastName) {
  alert("Your names match!");
}
    
                                    //Chapter 14

let password = prompt("Enter your password:");
if (password !== "") {
if (password.length <= 5) {
alert("Password must be greater than 5 characters");
} else {
 alert("OK");
 }
} else {
alert("Password cannot be empty");
 }

 if (a === 1) {
    if (c === "Max") {
      alert("OK");
    }
  }

  
  if (a === 1 && c === "Max") {
    alert("OK");
  }

  let value1 = 100;
let value2 = 100;

if (value1 === value2) {
  if (value1 <= value2) {
    alert("Both variables are equal and less than or equal condition is met");
  }
}


                          // Chapter 15

let emptyArray = [];

let stringArray = ["Hello"];

var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]); // "j" is at index 2


var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
alert(alphabet.length); // 8

let singleElementArray = ["first"];
singleElementArray[1] = "second";
alert(singleElementArray[1]); // "second"


                                // Chapter 16

let myArray = ["firstElement"];
myArray.push("secondElement");
alert(myArray[myArray.length - 1]); // "secondElement"


var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop(); // Removes "k"

var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(42); // Adds 42 to the end

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift(); // Removes "S"

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3); // Adds 1, 2, 3 to the beginning

let arrayWithOneElement = ["original"];
arrayWithOneElement.unshift("newFirstElement");
alert(arrayWithOneElement[0]); // "newFirstElement"

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L"); // Inserts "L" at index 2


var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3); // ["S", "M", "XL"]


var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "elephant", "lion"); 
// Removes "cat", "ox", "duck" and adds "elephant", "lion" after "dog"
// Result: ["dog", "elephant", "lion", "frog"]

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2); // Removes "cat" and "ox"
// Result: ["dog", "duck", "frog"]

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5); // ["duck", "frog"];


//Chapter 17 - 20

for (let i = 0; i < 10; i++) {
    // Code to execute in each iteration
    console.log("This is iteration number:", i + 1);
  }

  for (let i = 0; i <= 11; i++) {
    // This loop will run 12 times
    console.log(i);
  }

  for (var i = 0; i <= 4; i++) {
    // Your code here
  }

  for (let counter = 0; counter < 100; counter++) {
    // This loop will run 100 times
    console.log(counter);
  }

  
  for (let i = 2; i > -1; i--) {
    // This loop will run 3 times
    console.log(i);
  }

  let arrLength = array.length;

  let flag = true; // or false, depending on the desired initial value

  let pets = ["dog", "cat", "bird", "fish"];
  for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
  }

  
  for (let i = 0; i < 10; i++) {
    if (i === 1) {
      alert(i);
      break; // Exit the loop after displaying the alert
    }
  }

  
  let userNames = ["Alice", "Bob", "Charlie", "David"];
let firstName = prompt("Enter first name");

for (let i = 0; i < userNames.length; i++) {
  if (firstName === userNames[i]) {
    alert("Enter");
    break;
  } else if (i === userNames.length - 1) {
    alert("Please write the correct user name");
  }
}

var matchFound = false;
var userInput1 = prompt("Enter something"); // Assuming there's user input
var list = ["item1", "item2", "item3"]; // Example list

for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  alert("No match found");
}

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < firstArr.length; i++) {
  for (let j = 0; j < secondArr.length; j++) {
    console.log(firstArr[i] + secondArr[j]);
  }
}







 
                                                                       

  
                          
                          

  


