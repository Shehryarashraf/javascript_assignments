//Chap#01:
//Task 1:
var greet = alert("Good morning visitor");

//Task 2:
var error = alert("Error! Please enter a valid Password");


//Task 3:
var wel = alert("Welcome to JS Land.." + "\nHappy Coding");


//Task 4:
var happy = alert("Welcome to JS Land..");
var happy = alert("Happy Coding!");


//Task 5:
console.log("Hello...I can run JS through my web browser's console");



//Chap#02:
//Task 1,2,3:
var username;
var myName = "Shehryar Ashraf";
var message = "Hello World";
alert(message);

//Task 4:
var std = "Johne Doe";
alert(std);
var yr = "15 years old";
alert(yr);
var job = "Certified Mobile Application Development";
alert(job);

//Task 5:
var js = "PIZZA \nPIZZ \nPIZ \nPI \nP";
alert(js);

//Task 6:
var email = "shehryarashraf789@gmail.com";
alert("My email address is " + email);

//Task 7:
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

//Task 8:
var a = ("Yah! I can write HTML content through JavaScript");
document.write(a);

//Task 9:
var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);




//Chap #03:
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



//Chap #04:
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



//Chap #05:
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
var a;
document.write("Value after variable declaration is: ??" + "<br>");
a = 5;
document.write("Initial value: " + a + "<br>");
++a;
document.write("Value after increment is: " + a + "<br>");
a = a + 7;
document.write("Value after addition is: " + a + "<br>");
--a;
document.write("Value after decrement is: " + a + "<br>");
document.write("The remainder is: " + (a % 3));


//Task 4:
var tick = 600;
document.write("The cost to buy 5 tickets to a movie is " + (tick * 5) + " PKR");


//Task 5:
var num = prompt("Enter any number: ");
document.write("Table of " + num + "<br>");
for (var i = 0; i < 10; i++) {
    document.write(num + " x " + (i + 1) + " = " + (num * (i + 1)) + "<br>");
}


//Task 6:
var C = prompt("Enter today's temperature in Celsius: ");
var F = (C * (9 / 5) + 32);
document.write(C + "\u00B0 C" + " is " + F + "\u00B0 F" + "<br>");
var F1 = prompt("Enter today's temperature in Fahrenheit: ");
var C1 = (F1 - 32) * (5 / 9);
document.write(F1 + "\u00B0 F" + " is " + C1 + "\u00B0 C" + "<br>");

//Task 7:
document.write("<bShopping Cart></b>" + "<br>" + "<br>");
var pOfItem1 = 650;
var a = parseInt(pOfItem1);
var qOfItem1 = 3;
var b = parseInt(qOfItem1);
var pOfItem2 = 100;
var c = parseInt(pOfItem2);
var qOfItem2 = 7;
var d = parseInt(qOfItem2);
var ShpChrgs = 100;
var e = (a * b) + (c * d) + ShpChrgs;
document.write("Total cost of your order is " + e);


//Task 8:
document.write("<bMarks Sheet</b>" + "<br>" + "<br>");
var tot = 980;
var Obt = 804;
document.write("Total Marks: " + tot);
document.write("Obtained Marks: " + Obt);
document.write("Percentage: " + (Obt / tot) * 100);

//Task 9:
document.write("<bCurrency in PKR</b>" + "<br>" + "<br>");
var us = 10;
var riyal = 25;
var usNew = 10 * (104.80);
var riyalNew = 25 * (28);
document.write("Total currency in PKR: " + (usNew + riyalNew));


//Task 10:
var num = 6;
num = ((num + 5) * 10) / 2;
document.write("answer: " + num);


//Task 11:
var cYr = 2020;
var bYr = 1996;
var age = 2020 - 1996;
document.write("<b>Age Calculator</b> " + "<br>" + "<br>");
document.write("Current Year: " + cYr + "<br>");
document.write("Birth Year: " + bYr + "<br>");
document.write("Age: " + (cYr - bYr));


//Task 12:
var r = 20;
var circumference = 2 * (3.142) * r;
var area = (3.142) * (r * r);
document.write("<b>The Geometrizer</b>" + "<br>" + "<br>" + "<br>");
document.write("Radius of a circle: " + r + "<br>");
document.write("The circumference of a circle is: " + circumference + "<br>");
document.write("Area of a circle is: " + area + "<br>");


//Task 13:
var snacks = "Lays";
var age = 15;
var maxAge = 65;
var estAmount = 3;
document.write("<b>The LifeTime Supply Calculator</b>" + "<br>" + "<br>" + "<br>")
document.write("Current Age: " + age + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + estAmount + "<br>");
document.write("You will need " + ((65 - 15) * 3) + " chips to last you until the ripe old age of " + maxAge);


//Chap # 6-9
//Task 1:
var inp = prompt("Enter any number");
document.write("Result:" + "<br>");
document.write("The value of a is: " + inp + "<br>");
document.write(".............................." + "<br>" + "<br>" + "<br>");
document.write("The value of ++a is: " + (++inp) + "<br>");
document.write("Now the value of a is: " + inp);
document.write("<br>" + "<br>" + "<br>");
document.write("The value of a++ is: " + (inp++) + "<br>");
document.write("Now the value of a is: " + inp);
document.write("<br>" + "<br>" + "<br>");
document.write("The value of --a is: " + (--inp) + "<br>");
document.write("Now the value of a is: " + inp);
document.write("<br>" + "<br>" + "<br>");
document.write("The value of a-- is: " + (inp--) + "<br>");
document.write("Now the value of a is: " + inp);

//Task 2:
var a = 2,
    b = 1;
var result = --a - --b + ++b + b--;
document.write(result);
//here decrementing a results 1
// --a:                       1
//now decrementing b results 0 subtracting from a i.e 1 results 1
//--a - --b:                  1 - 0 =1 
//now incrementing b results in 1 which is added in  1 resulting 2               
//--a - --b + ++b:            1 - 0 + 1 = 2  
//now b-- means the saved value is returned which was 1 and it is added in 2 resulting 3  
//--a - --b + ++b + b--:      1 - 0 + 1 + 1 = 3 
//Answers:
// value of a is 1
// value of b is 1
// result is 2

//Task 3:
var name = prompt("Enter your name:");
alert("Hello " + name + " Good morning");


//Task 5:
var inp = prompt("Enter any number");
if (inp == "") {
    for (var i = 0; i < 10; i++) {
        document.write(" 5 " + " x " + (i + 1) + " = " + (5 * (i + 1)) + "<br>");
    }
} else {
    for (var i = 0; i < 10; i++) {
        document.write(inp + " x " + (i + 1) + " = " + (inp * (i + 1)) + "<br>");
    }
}

//Task 6:
var sub1 = prompt("Enter your first subject:");
var sub2 = prompt("Enter your second subject:");
var sub3 = prompt("Enter your third subject:");
var tot = 100;
var obtSub1 = prompt("Enter obtained marks of your first subject");
var obtSub2 = prompt("Enter obtained marks of your second subject");
var obtSub3 = prompt("Enter obtained marks of your third subject");
var a = parseInt(obtSub1);
var b = parseInt(obtSub2);
var c = parseInt(obtSub3);
var per1 = ((obtSub1 / tot) * 100);
var per2 = ((obtSub2 / tot) * 100);
var per3 = ((obtSub3 / tot) * 100);
document.write("<b>Subject</b>" + "&nbsp &nbsp" + "<b>Total marks</b>" + "&nbsp &nbsp" + "<b>Obtained Marks</b>" + "&nbsp &nbsp" + "<b>Percentage</b>" + "<br>");
document.write("<b>English</b>" + "&nbsp &nbsp &nbsp &nbsp &nbsp" + tot + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + obtSub1 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + per1 + "%" + "<br>");
document.write("<b>Maths</b>" + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + tot + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + obtSub2 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + per2 + "%" + "<br>");
document.write("<b>Urdu</b>" + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + tot + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + obtSub3 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + per3 + "%" + "<br>");
document.write("&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + (tot * 3) + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + (a + b + c) + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + (((per1 + per2 + per3) / 300) * 100) + "%" + "<br>");



//Chap # 9-11
//Task 1:
var city = prompt("Enter your city name:");
if (city == "Karachi") {
    document.write("Welcome to city of lights");
}

//Task 2:
var gender = prompt("Enter your gander:");
if (gender == "male") {
    document.write("Good Morning Sir")
} else if (gender == "female") {
    document.write("Good Morning Ma'am");
}


//Task 3:
var col1 = prompt("Enter the colors of traffic signal:");
var col2 = prompt("color 1:");
var col3 = prompt("color 2:");
document.write("Signal color" + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + "Message");
document.write("<br>");
document.write(col1 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + "Must Stop");
document.write("<br>");
document.write(col2 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + "Ready to Move");
document.write("<br>");
document.write(col3 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + "Move now");

//Task 4:
var fuel = prompt("how much fuel you want to fill in the car?");
if (fuel < 0.25) {
    document.write("Please refill the fuel in the car");
} else {
    document.write("Fuel is filled. Thanks")
}

//Task 5:
//part a:
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true"); //alert message is displayed
}

//part b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true"); //alert message is not displayed 
}

//part c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true"); //alert message is displayed
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true"); //alert message is displayed
}

//part d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals"); //alert message is displayed
}

//part e
if (true) {
    alert("True"); //alert message is displayed
}
if (false) {
    alert("False");
}

//part f
if ("car" < "cat") {
    alert("car is smaller than cat"); //alert message is displayed
}

//Task 6:
document.write("<b>Marks Sheet</b>");
document.write("<br>");
document.write("<br>");
var tot = prompt("Enter the total marks of three subjects");
var phy = prompt("Enter the obtained marks in physics");
var chem = prompt("Enter the obtained marks in chemistry");
var maths = prompt("Enter the obtained marks in maths");
var a = parseInt(tot);
var b = parseInt(phy);
var c = parseInt(chem);
var d = parseInt(maths);

var totalObt = b + c + d;
var per = (totalObt / a) * 100;
document.write("Total Marks: " + a + "<br>");
document.write("Marks Obtained: " + totalObt + "<br>");
document.write("Percentage: " + per + "<br>");

if (per >= 80) {
    document.write("Grade: A-1" + "<br>");
    document.write("Remarks: Excellent")
}
if (per >= 70) {
    document.write("Grade: A" + "<br>");
    document.write("Remarks: Good")
}
if (per >= 60) {
    document.write("Grade: B" + "<br>");
    document.write("Remarks: You need to improve")
}
if (per < 60) {
    document.write("Grade: Fail" + "<br>");
    document.write("Remarks: Sorry")
}

//Task 7:
var secret = 6;
var a = parseInt(secret);
var guess = prompt("Guess the number ranging from 1 to 10");
if (a == guess) {
    alert("Bingo! Correct answer");
}
if (guess == a + 1) {
    alert("Close enough to the correct answer");
}

//Task 8:
var inp = prompt("Enter any number");
var a = parseInt(inp);
if (a % 3 == 0) {
    alert("Divisible by 3");
} else {
    alert("Not divisible by 3");
}

//Task 9:
var inp = prompt("Enter any number");
var a = parseInt(inp);
if (a % 2 == 0) {
    alert(a + " is an even number");
} else(
    alert(a + " is an odd number")
)

//Task 10:
var temp = prompt("Enter today's temperature");
if (temp > 40) {
    alert("It is too hot outside");
}
if (temp > 30 && temp < 40) {
    alert("The weather today is normal");
}
if (temp > 20 && temp < 30) {
    alert("Today's weather is cool");
}
if (temp > 10 && temp < 20) {
    alert("OMG! today's weather is so cool");
}

//Task 11:
var inp1 = prompt("Enter first number");
var a = parseInt(inp1);
var inp2 = prompt("Enter second number");
var b = parseInt(inp2);
var op = prompt("Enter the operator");
if (op == "+") {
    alert("The sum of two numbers is " + (a + b));
}
if (op == "-") {
    alert("The difference of two numbers is " + (a - b));
}
if (op == "x") {
    alert("The multiplication of two numbers is " + (a * b));
}
if (op == "/") {
    alert("The division of two number is " + (a / b));
}
if (op == "%") {
    alert("The modulus of two numbers is " + (a % b));
}


//CHAP # 12-13:
//Task 1:
var input = prompt();
var index = 0;
var i = input.charCodeAt(index);

if (i >= 65 && i <= 90) {
    document.write(`This is capital ${input}.`)
} else if (i >= 97 && i <= 122) {
    document.write(`This is small ${input}.`)
} else if (i >= 48 && i <= 57) {
    document.write(`It's a number ${input}.`);
} else {
    document.write(`${input} is a special character.`)
}

//Task 2:
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
if (num1 > num2) {
    document.write(num1 + " is greater than " + num2);
} else if (num2 > num1) {
    document.write(num2 + " is greater than " + num1);
} else {
    document.write("Both are equal");
}

//Task 3:
var num1 = prompt("Enter any number");
if (num1 > 0) {
    document.write(num1 + " is a positive number");
} else if (num1 < 0) {
    document.write(num1 + " is a negative number");
} else {
    document.write("It is equal to zero");
}

//Task 4:
var char = prompt("Enter any string of length 1");
if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
    document.write("true");
} else {
    document.write("false");
}

//Task 5:
var pass = "shehryar";
var pass1 = prompt("Enter password:");
if (pass1 == "") {
    document.write("Please enter your password");
} else if (pass1 == pass) {
    document.write("Correct! The password you entered matches the original password");

} else {
    document.write("Incorrect password");

}

//Task 6:
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

//Task 7:
var time = prompt("Enter the time:");
if (time <= 1200 && time >= 0000) {
    document.write("Good Morning!");
} else if (time <= 1700 && time >= 1200) {
    document.write("Good afternoon!");
} else if (time <= 2100 && time >= 1700) {
    document.write("Good Evening!");
} else {
    document.write("Good Night!");
}


//Task 8:


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


//Task 13:
var arr = [];
arr.push("keyboard", "mouse", "printer", "monitor");
document.write(arr);
document.write("<br>");

for (var i = 0; i < arr.length + 3; i++) {
    var rem = arr.shift();
    document.write("<br>" + "<b>Out:</b>" + "<br>" + rem);
}

//Task 14:
var arr = [];
arr.push("keyboard", "mouse", "printer", "monitor");
document.write(arr);
document.write("<br>");
for (var i = 0; i < arr.length + 3; i++) {
    var rem = arr.pop();
    document.write("<br>" + "<b>Out:</b>" + "<br>" + rem);
}

//Task 15:
Incomplete
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


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