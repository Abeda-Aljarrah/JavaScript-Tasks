/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
let x = 10;
let y = 20;
if (x > y) {
    console.log(x)
}else if (y > x) {
    console.log(y);
}

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */

let q = 3;
let w = -7;
let e = 2;
if(q*w*e>=0){
    alert(`the sign is +`);
}else{
    alert(`the sign is -`)}

// if( q > 0 && w > 0 && e > 0){
//     alert(`the sign is +`);
// }
// else if( q < 0 && w < 0 && e < 0){
//     alert(`the sign is -`)
// }
// else if ( q < 0 && w > 0 && e < 0){
//     alert(`the sign is +`)
// }
// else if (q > 0 && w < 0 && e < 0){
//     alert(`the sign is +`)
// }
// else if (q < 0 && w > 0 && e > 0){
//     alert(`the sign is +`)
// }
// else if (q > 0 && w < 0 && e > 0){
//     alert(`the sign is -`)
// }
// else if (q < 0 && w > 0 && e > 0){
//     alert(`the sign is -`)
// }
// else if (q > 0 && w > 0 && e < 0){
//     alert(`the sign is -`)
// }

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

number=[0,-1,4];
if (number[0] > number[1] && number[0] > number[2] && number[1] > number[2]){
    alert(number)
} 
else if (number[1] > number[0] && number[1] > number[2] && number[0] > number[2]) {
    alert([number[1],number[0],number[2]])
}
else if (number[2] > number[0] && number[2] > number[1] && number[1] > number[0]){
    alert([number[2],number[1],number[0]])
}
else if (number[0] > number[1] && number[0] < number[2] && number[1] < number[2]) {
    alert([number[2],number[0],number[1]])
}
else if (number[0] > number[1] && number[0] > number[2] && number[1] < number[2]){
    alert([number[0],number[2],number[1]])
}
else if (number[1] > number[0] && number[1] > number[2] && number[0] < number[2]) {
    alert([number[1],number[2],number[1]])
}

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

largest=[-5,-2,-6,0,-1]
if (largest[0] > largest[1] && largest[0] > largest[2] && largest[0] > largest[3] && largest[0] > largest[4]){
    alert(largest[0])
}
else if (largest[1] > largest[0] && largest[1] > largest[2] && largest[1] > largest[3] && largest[1] > largest[4]){
    alert(largest[1])
}
else if (largest[2] > largest[0] && largest[2] > largest[1] && largest[2] > largest[3] && largest[2] > largest[4]){
    alert(largest[2])
}
else if (largest[3] > largest[0] && largest[3] > largest[1] && largest[3] > largest[2] && largest[3] > largest[4]){
    alert(largest[3])
}
else if (largest[4] > largest[0] && largest[4] > largest[1] && largest[4] > largest[2] && largest[4] > largest[3]){
    alert(largest[4])
}

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
let u = 10;
let o = 20;
if ( u > o ){
    alert(`Hello world`)
} else{
    alert(`Goodbye`)
}

