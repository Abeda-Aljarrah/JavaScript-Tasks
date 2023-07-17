// let text = "Visit W3Schools!"; 
// let n = text.search("W3Schools");
// document.getElementById("demo").innerHTML = n;

// let text = "Is this all there is?";
// let result = text.match(/is/g);
// document.getElementById("demo").innerHTML = result; 

// let text = "Is this all there is?";
// let result = text.match(/[h]/g);
// document.getElementById("demo").innerHTML = result;

// let text = "Is this all there is?";
// let result = text.match(/\s/g);
// document.getElementById("demo").innerHTML = result;


// Using test()
// The test() method is a RegExp expression method.

// It searches a string for a pattern, and returns true or false, depending on the result.

// The following example searches a string for the character "e":
// let text = document.getElementById("p01").innerHTML;
// const pattern = /e/;
// document.getElementById("demo").innerHTML = pattern.test(text);


// Using exec()
// The exec() method is a RegExp expression method.

// It searches a string for a specified pattern, and returns the found text as an object.

// If no match is found, it returns an empty (null) object.

// The following example searches a string for the character "e":

// const obj = /e/.exec("The best things in life are free!");
// document.getElementById("demo").innerHTML =
// "Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;