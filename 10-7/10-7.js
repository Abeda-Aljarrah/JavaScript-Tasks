let x = 5;
let y = 2;
let z = x * y;
console.log(z)

x = 10;
y = 5;
alert(x == y);

// if (condition) {
//     //  block of code to be executed if the condition is true
//   }

// if (new Date().getHours() < 18) {
//     console.log("Good day!");
//   }

//   if (condition) {
//     //  block of code to be executed if the condition is true
//   } else {
//     //  block of code to be executed if the condition is false
//   }  

// const hour = new Date().getHours(); 
// let greeting;

// if (hour > 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(greeting)

// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }
const time = new Date().getHours();
let greet;
if (time < 10) {
    greet = "Good morning";
  } else if (time < 11) {
    greet = "Good day";
  } else {
    greet = "Good evening";
  }
  console.log(greet)

//   switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log(day)

// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

//  for

// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }

let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "  ";
}
console.log(text)

// for in

// for (key in object) {
//     // code block to be executed
//   }

const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
console.log(txt)

// for of

// for (variable of iterable) {
//     // code block to be executed
//   }

let language = "JavaScript";

let text2 = "";
for (let x of language) {
  text2 += x + "    ";
}
console.log(text2)

// While

// while (condition) {
//     // code block to be executed
//   }

let text3 = "";
let i = 0;
while (i < 10) {
  text3 += "    The number is " + i;
  i++;
}
console.log(text3)

// Do While
// The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested
// do {
//     // code block to be executed
//   }
//   while (condition);

let text4 = ""
let t = 10;

do {
  text4 += "<br>The number is " + t;
  t++;
}
while (t < 10); 
console.log(text4) 

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let r = 1;
let text5 = "";

for (;cars[r];) {
  text5 += cars[r];
  r++;
}
console.log(text5)

let u = 0;
let text6 = "";
while (cars[u]) {
  text6 += cars[u] + "<br>";
  u++;
}
console.log(text6)

// The Break Statement

// You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.
// The break statement can also be used to jump out of a loop

// The Continue Statement

// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.