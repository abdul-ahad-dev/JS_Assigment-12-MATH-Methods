

// Task 01


document.write("<h2>Task 01</h2>");

var number = 3.45214;


document.write("number: " + number);
document.write("<br>");


document.write("round off value: " + Math.round(number));
document.write("<br>");


document.write("floor value: " + Math.floor(number));
document.write("<br>");


document.write("ceil value: " + Math.ceil(number));
document.write("<br>");



// Task 02


document.write("<h2>Task 02</h2>");


var number = -2.673;


document.write("number: " + number);
document.write("<br>");


document.write("round off value: " + Math.round(number));
document.write("<br>");


document.write("floor value: " + Math.floor(number));
document.write("<br>");


document.write("ceil value: " + Math.ceil(number));
document.write("<br>");



// Task 03

document.write("<h2>Task 03</h2>");


var num = -5;

document.write("The absolute value of " + num + " is : " + Math.abs(num));



// Task 04

document.write("<h2>Task 04</h2>");


var diceNum = Math.ceil(Math.random() * 6);

document.write("random dice value: " + diceNum);



// Task 05

document.write("<h2>Task 05</h2>");


var coin = Math.round(Math.random());

if (coin == 0) 
{
    document.write("random coin value: Tails");
} 
else 
{
    document.write("random coin value: Heads");
}



// Task 06

document.write("<h2>Task 06</h2>");


var randomNum = Math.ceil(Math.random() * 100);

document.write("random number between 1 and 100 : " + randomNum);



// Task 07

document.write("<h2>Task 07</h2>");

var secretNum = Math.ceil(Math.random() * 10);

var userInput = +prompt("Enter a number between 1 and 10");

if (userInput === secretNum) 
{
    document.write("Congratulate, you guess the rigth number.");
} 
else 
{
    document.write("Try again!!!")
}




