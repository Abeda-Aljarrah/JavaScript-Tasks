/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/
let x = 250;
let zakat = (2.5/100)*x;
console.log(zakat)

/*
Array Tasks : 
1
Correct the syntax error*/
 r=[ 1,7,9,45]

 t=["Str","alex","moh"]

 f=['the','fox','over','lazy','dog']

 /*
2
What the index of "Banana","Tomato"*/
var fruits=["Tomato","Banana","Watermelon"]
let y=fruits.indexOf("Banana");
console.log(y)
let i=fruits.indexOf("Tomato");
console.log(i)
/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
const food=["Banana","Mango"];
const Sport=["Swimming","running","dancing"]
const movie=["The man who knows infinity","Black swan"]

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
firstOfArray=[1,4,5]
u=firstOfArray[0]
console.log(u)
FirstOfArray=["t","u","g","x"]
j=FirstOfArray[0]
console.log(j)

/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
let lastOfArray=[1,4,5]
const lastItem = lastOfArray[lastOfArray.length - 1];
console.log(lastItem)

LastOfArray=["t","u","g","x"]
const LastItem = LastOfArray[LastOfArray.length - 1];
console.log(LastItem)

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9]
array.push(10)
console.log(array)
array.shift(0)
array.shift(5)
array.shift(7)
console.log(array)
array.unshift(1,3,4,6,8)
console.log(array)

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5]
var array = [0,5,7,9]
array[2]=-7
console.log(array)
array.shift(0)
console.log(array)
array.push(3.5)
console.log(array)

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]
arr1.sort(function(a, b){return a-b});
console.log(arr1)




