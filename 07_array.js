// Introduction to Array
// Array is mutable
// Array is reference type
let fruit = ["Apple","mango","grapes"];
console.log(fruit[0]);
fruit[0] = "banana";
console.log(typeof fruit); //object

// console.log(fruit.push("orange")) //4.
console.log(fruit.pop());
console.log(fruit.pop());
console.log(fruit.pop());


console.log(fruit);

let numbers = [1,2,3,4,5,6,7,8,9];

let mixed = [1,2,3,4,5,6,null,undefined,"string"];
console.log(mixed );
console.log(Array.isArray(mixed));