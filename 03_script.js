// typeof operator

let x = 32;
console.log(typeof (x));

// convert number to string
let conversion = x + " ";
console.log(typeof (conversion)); //string "32"


let myAge = 20;
myAge = String(myAge);
console.log(typeof (myAge));

// convert string to number
let myName = +"AtifRaza";
console.log(typeof (myName));

let myName1 = "Atif Raza";
myName1 = Number(myName1);
console.log(typeof (myName1));

//String concatenation

let string1 = "Atif";
let string2 = "Raza";

let fullName = string1 + " " + string2;
console.log(fullName);

let string3 = "10";
let string4 = "20";

let fullName1 = string3 + string4;
console.log(fullName1); // 1020

//let fullName1 = +string3 + +string4;
console.log(fullName1); // 30