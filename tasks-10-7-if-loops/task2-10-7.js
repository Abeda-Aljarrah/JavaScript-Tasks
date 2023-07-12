/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

// it's better to use switch here

const num = parseFloat(prompt("Enter your rate: "));
if (num < 50){
    alert(`Fail`)
}
else if (num >= 50 && num <=59 ){
    alert(`E`)
}
else if (num >= 60 && num <=69 ){
    alert(`D`)
}
else if (num >= 70 && num <=79 ){
    alert(`C`)
}
else if (num >= 80 && num <=89 ){
    alert(`B`)
}
else if (num >= 90 && num <=100 ){
    alert(`A`)
}

