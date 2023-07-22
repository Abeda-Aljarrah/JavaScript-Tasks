// function isValidPassword(password, username) {
//     if (password.length < 8){
//         return false;
//     }
//     if (password.indexOf(username) !== -1){
//         return false;
//     }
//     if (password.indexOf(' ')!== -1) {
//         return false;
//             }
//     return true;
// }

// console.log(isValidPassword("hellotughvhhbfx", "Abeda"));

// function isPangram(sentence) {
//     let alph="abcdefghijklmnopqrstuvwxyz"
//     for (let i = 0; i < sentence.length; i++){
//         if (sentence.indexOf(alph) === -1){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPangram("abcdefghijklmnopqrstuz"));


const GFG = {
    topic: 'OOPs',
    lang: 'JavaScript',
    sub_topics: {
        topic_1: 'Class',
        topic_2: 'Object'
    }
}
console.log(GFG.topic);
console.log(GFG.sub_topics.topic_1);
console.log(GFG["lang"]);
console.log(GFG.sub_topics["topic_2"]);

class OOPs {
    constructor(name) {
        this.name = name;
    }
  
    // Getter method
    get langName() {
        return this.name;
    }
  
    // Setter method
    set langName(x) {
        this.name = x;
    }
    hello(){
        console.log(`Hello ${this.name}`)
    }
}
  
let obj = new OOPs('JavaScript');
console.log(obj.name); 
  
obj.langName = 'Java';
console.log(obj.name);


// function Pen(name, color, price) {
//     this.name = name;
//     this.color = color;
//     this.price = price;
// }

// const pen1 = new Pen("Marker", "Blue", "$3");
// console.log(pen1);


// function Pen(name, color, price) {
//     this.name = name;
//     this.color = color;
//     this.price = price;
// }

// const pen1 = new Pen("Marker", "Blue", "$3");

// Pen.prototype.showPrice = function(){
//     console.log(`Price of ${this.name} is ${this.price}`);
// }

// pen1.showPrice();


class Pen {
    constructor(name, color, price){
        this.name = name;
        this.color = color; 
        this.price = price;
    }
    
    showPrice(){
        console.log(`Price of ${this.name} is ${this.price}`);
    }
}

const pen1 = new Pen("Marker", "Blue", "$3");
pen1.showPrice();

class User {

#p;
   constructor(id, username, password) {
     this.i = id;
     this.u = username;
     this.#p = password;
   }

   getPassword() {
     return parseInt(this.#p);
   }
 }

 let userOne = new User(1, "Razan", "1234567kjg");

 console.log(userOne.p);

 console.log(userOne.getPassword());