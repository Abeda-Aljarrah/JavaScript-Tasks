// Functions:
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

function myFunction(p1, p2) {  /*between the brackets () = parameters*/
    return p1 * p2;
  }
  
let result = myFunction(4, 3);
console.log(result); /*between the brackets () = argument*/

//   JavaScript Function Syntax
//   A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
  
//   Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
  
//   The parentheses may include parameter names separated by commas:
//   (parameter1, parameter2, ...)
  
//   The code to be executed, by the function, is placed inside curly brackets: {}
  
        //   function name(parameter1, parameter2, parameter3) {
        //     // code to be executed
        //   }

//   Function parameters are listed inside the parentheses () in the function definition.
  
//   Function arguments are the values received by the function when it is invoked.
  
//   Inside the function, the arguments (the parameters) behave as local variables.  

// Why Functions?

// With functions you can reuse code
// You can write code that can be used many times.
// You can use the same code with different arguments, to produce different results.

function toCelsius(f) {
    return (5/9) * (f-32);
  }
  
let value = toCelsius(77);
// let value = toCelsius;
console.log(value);

// NOTE: toCelsius refers to the function object, and toCelsius() refers to the function result.
//  What is arrow function??
// JavaScript Objects:
// Objects are variables too. But objects can contain many values

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Display some data from the object:
console.log("The car type is " + car.type);

// The values are written as name:value pairs (name and value separated by a colon).

// Spaces and line breaks are not important. An object definition can span multiple lines:
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Display some data from the object:
  console.log(person.firstName + " is " + person.age + " years old.");

// Accessing Object Properties
// You can access object properties in two ways:
// objectName.propertyName
// objectName["propertyName"]


// Object Methods:
// Methods are actions that can be performed on objects.
// Methods are stored in properties as function definitions.
// A method is a function stored as a property.

// This:
// In a function definition, this refers to the "owner" of the function.
// In the example above, this is the person object that "owns" the fullName function.
// In other words, this.firstName means the firstName property of this object.

// Accessing Object Methods
// You access an object method with the following syntax:

// objectName.methodName()

const person2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
// delete person.age;
// console.log(person.fullName);
console.log(person2.fullName());

// f person is an object, the following statement will not create a copy of person:

// const x = person;  // Will not create a copy of person.

// The object x is not a copy of person. It is person. Both x and person are the same object.
// Any changes to x will also change person, because x and person are the same object.

// Nested Objects
// Values in an object can be another object:

// Example

myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
console.log(myObj.cars.car2);