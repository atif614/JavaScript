// primitive data type

let num1 = 8;
let num2 = num1
console.log("Value of num1 is", num1);//8
console.log("Value of num2 is", num2);//8
num1++;

console.log("Value of num1 is", num1);// 9
console.log("Value of num2 is", num2);// 8

//reference type
// array

let array1 = ["item1", "item2"];
let array2 = array1;

console.log(array1); // ['item1', 'item2']
console.log(array2); // ['item1', 'item2']

array1[0]  = "item3";

console.log(array1); // ['item3', 'item2']
console.log(array2); // ['item3', 'item2']



