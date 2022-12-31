// booleans and comparison operator

let num1 = "7";
let num2 = 7;
console.log(num1>num2); 

//  === vs ===
console.log(num1 === num2);

// != vs !==
console.log(num1 != num2); //false
console.log(num1 !== num2); //true


// ternary operator/conditional operator

let age = 15;
let drink;
if(age>=5){
    drink = "coffee";
}
else{
    drink = "milk";
}
console.log(drink);

let age1 =  7;
let drink1 = age >= 5 ? "coffee" : "milk";
console.log(drink1);

// and or operator

let myName = "Atif Raza";
let myAge = 22;

// if(myName[0] === 'A'){
//     console.log("Your name starts with A")
// }

// if(myAge > 18){
//     console.log("You are above 18");
// }

if((myName[0] === 'A') && (myAge > 18)){
        console.log("Your name starts with A and your age is above 18");
    }


