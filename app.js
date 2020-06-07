//Chap#01:
//Task 1:
var username;
var myName = "Shehryar Ashraf";
var message = "Hello World";
alert(message);

//Task 2:
var std = "Johne Doe";
alert(std);
var yr = "15 years old";
alert(yr);
var job = "Certified Mobile Application Development";
alert(job);

//Task 3:
var js = "PIZZA \nPIZZ \nPIZ \nPI \nP";
alert(js);

//Task 4:
var email = "shehryarashraf789@gmail.com";
alert("My email address is " + email);

//Task 5:
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

//Task 6:
var a = ("Yah! I can write HTML content through JavaScript");
document.write(a);

//Task 7:
var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);




//Chap #02:
//Task 1:
var age = 23;
alert("I am " + age + " years old");

//Task 2:
Incomplete
var a = "1";
var track = alert("I have visited" + track + "number of times");

//task 3:
var birthYear = 1996;
document.write("My birth year is " + birthYear);
document.write("<br>");
document.write("Data type of my declared variable is number");

//Task 4:
var visName = "John Doe";
var prod = "T- shirt(s)";
var quant = 5;
document.write(visName + " ordered " + quant + " " + prod + "on XYZ Clothing store");



//Chap #03:
//Task 1:
var myVar, yourVar, ourVar;

// Task 2:
//Legal var names
var userName;
var shopKeeper;
var userResponseTime;
var userResponseTimeLimit;
var response;

//Illegal var names
var 1 sherry;
var "rose";
var john doe;
var shehryar_ashraf;
var shoaib$ahmed;

//Task 3:
var str = new String("Rules for naming JS variables");
document.write(str.bold());
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("Variable names can only contain numbers, $, and _. For example $my_1stVariable");
document.write("<br>");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name");
document.write("<br>");
document.write("Variable names are case sensitive");
document.write("<br>");
document.write("Variable names should not be JS keyword");



//Chap #04:
//Task 1:
var a = 3,
    b = 5;
document.write("Sum of " + a + " and " + b + " is ", a + b);

//Task 2:
//Subtraction
var a = 3,
    b = 5;
document.write("Subtraction of " + a + " and " + b + " is ", a - b);

//Multiplication
var a = 3,
    b = 5;
document.write("Multiplication of " + a + " and " + b + " is ", a * b);

//Division
var a = 3,
    b = 5;
document.write("Division of " + a + " and " + b + " is ", a / b);

//Modulus
var a = 3,
    b = 5;
document.write("Modulus of " + a + " and " + b + " is ", a % b);

//Task 3:




//Chap # 14-16:
//Task 1:
var studentNames = [];

//Task 2:
var studentNames1 = new Array();

//Task 3:
var cars = ["Saab", "Volvo", "BMW"];

//Task 4:
var num = [12, 34, 67, 98];

//Task 5:
var boolArray = new boolean[size];

//Task 6:
var cars = ["Saab", "Volvo", "BMW", 3, 45];

//Task 7:
var qual = ["SSC", "HSC", "BCS", "BS", "B.COM", "MS", "M.Phil", "PhD"];
document.write("<b>Qualifications</b>");
document.write("<br>");
document.write("<br>");
for (var i = 0; i < qual.length; i++) {
    document.write(i + 1 + ")" + qual[i]);
    document.write("<br>");
}

//Task 8:
var stdNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];

for (var i = 0; i < scores.length; i++) {
    document.write("Score of " + stdNames[i] + " is " + scores[i] + ". Percentage: " + (scores[i] / 500) * 100 + "%");
    document.write("<br>");
}

//Task 9:
var color = ["red", "green", "blue", "yellow", "pink", "purple", "white"];
for (var i = 0; i < color.length; i++) {
    document.write(color[i]);
    document.write("<br>");
}

//a:
var a = prompt("what color you want to add to the beginning?");
alert(a);
color[0] = a;
document.write("<br>");
document.write("<b>Updated Array:</b>");
document.write("<br>");
for (var i = 0; i < color.length; i++) {
    document.write(color[i]);
    document.write("<br>");
}

//b:
var b = prompt("what color you want to add to the end?");
alert(b);
color[color.length - 1] = b;
document.write("<br>");
document.write("<b>Updated Array:</b>");
document.write("<br>");
for (var i = 0; i < color.length; i++) {
    document.write(color[i]);
    document.write("<br>");
}

//c:
var c = prompt("enter two more colors to add to the beginning");
var c1 = prompt("second color: ");
color[1] = c;
color[2] = c1;
document.write("<br>");
document.write("<b>Updated Array:</b>");
document.write("<br>");
for (var i = 0; i < color.length; i++) {
    document.write(color[i]);
    document.write("<br>");
}

//d:
color.shift();
document.write("<br>");
document.write("<b>Updated Array:</b>");
document.write("<br>");
for (var i = 0; i < color.length; i++) {
    document.write(color[i]);
    document.write("<br>");
}

//e:
color.pop();
document.write("<br>");
document.write("<b>Updated Array:</b>");
document.write("<br>");
for (var i = 0; i < color.length; i++) {
    document.write(color[i]);
    document.write("<br>");
}

//f:
var f = prompt("What is the color you want to add?");
var f1 = prompt("At which index you want to add?");
color[f1] = f;
document.write("<br>");
document.write("<b>Updated Array:</b>");
document.write("<br>");
for (var i = 0; i < color.length; i++) {
    document.write(color[i]);
    document.write("<br>");
}

//g:
Incomplete
var g = prompt("At which index you want the element to be deleted?");
var g1 = prompt("How many elements you want to delete?");

//Task 10:
var stdScores = [320, 230, 480, 120];
document.write("Scores of students: " + stdScores);
stdScores.sort();
document.write("<br>");
document.write("Ordered scores of students: " + stdScores);

//Task 11:
var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<b>Cities List:</b>")
document.write("<br>");
document.write(city);
var selectedCities = city.splice(2, 2);
document.write("<br>");
document.write("<br>");
document.write("<b>Selected Cities List:</b>");
document.write("<br>");
document.write(selectedCities);

//Task 12:
var arr = ["This", " is ", " my ", " cat"];
document.write("Array:");
document.write("<br>");
document.write(arr);
var arr1 = arr.join(" ");
document.write("<br>");
document.write("<br>");
document.write("String:");
document.write("<br>");
document.write(arr1);




//Chap # 17-20:
//Task 1:
var myArray = [, , , ];

//Task 2:
myArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];

document.write(myArray);

//Task 3:
for (var i = 1; i <= 10; i++) {
    document.write(i);
    document.write("<br>");
}

//Task 4:
var number = window.prompt("Enter a number to show its multiplication table: ");
var length = window.prompt("Enter length multiplication table: ");
document.write("Multiplication table of " + number);
document.write("<br>");
document.write("Length " + length);
document.write("<br>");
document.write("<br>");
for (var i = 1; i <= length; i++) {
    document.write(number + " x " + i + " = ", number * i);
    document.write("<br>");
}

//Task 5:
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i]);
    document.write("<br>");
}

//Task 6:
document.write("<b>Counting:</b>");
document.write("<br>");
document.write("<br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");

}


document.write("<b>Reverse Counting:</b>");
document.write("<br>");
document.write("<br>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");

}

document.write("<b>Even:</b>");
document.write("<br>");
document.write("<br>");
for (var i = 0; i <= 20;) {
    document.write(i + ", ");
    i = i + 2;

}

document.write("<b>Odd:</b>");
document.write("<br>");
document.write("<br>");
for (var i = 1; i <= 20;) {
    document.write(i + ", ");
    i = i + 2;

}

document.write("<b>Series:</b>");
document.write("<br>");
document.write("<br>");
for (var i = 2; i <= 20;) {
    document.write(i + "k, ");
    i = i + 2;

}

//Task 7:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt("Welcome to Ramzan Bakery. What do you want to order sir/ma'am?");
var index = A.indexOf(item);
var z = 0;
for (var i = 0; i < A.length; i++) {
    if (item == A[i]) {
        alert(item + " is available at index " + index + " in our bakery");
        z = 1;
    }
}
if (z == 0) {
    alert("We are sorry. " + item + " is not available in our bakery");
}

//Task 8:
var A = [24, 53, 78, 91, 12];
var largest = 0;

for (i = 0; i <= largest; i++) {
    if (A[i] > largest) {
        var largest = A[i];
    }
}
document.write("Array items: " + A);
document.write("<br>");
document.write("The largest number is " + largest);

//Task 9:
const A = [24, 53, 78, 91, 12];
const min = Math.min(...A);
document.write("Array items: " + A);
document.write("<br>");
document.write("The smallest number is " + min);

//Task 10:
var num = 5;
for (var i = 1; i <= 20; i++) {
    document.write(num * i + ", ");
}