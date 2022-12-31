//undefined

let name;
console.log(name);

//null
let myVariable = null;
console.log(myVariable);
console.log(typeof myVariable); //object -> it's a bug/error in JS.


// BigInt

let myNumber = BigInt(9007n);
let number1 = 45n; //conver to BigInt
console.log(myNumber);
console.log(myNumber + number1)