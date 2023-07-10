// 1. Write a JS code to print numbers from 1 to 10

let text = "";

for (let i = 0; i <= 10; i++) {
  text +=  i + "  ";
}
console.log(text)

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
let arr = [13,23,12,45,22,48,66,100];
let even = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0)
    even.push(arr[i]);
}
console.log(even);

/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/

let p = "";

for (let i = 1; i <= 8; i++) {
  
   for (let num = 1; num <= i; num++) {
      p += num;
   }
   p += "\n";
}
console.log(p);

/* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/
let x = "don't know why"
if (x.includes("y")){
    console.log("Yes");
}else{
    console.log("No");
}
