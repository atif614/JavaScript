//object destructuring

let array = {
    firstName: "atif",
    lastName: "Raza",
    age: 22
};

let value1 = array.firstName;
let value2 = array.lastName;
console.log(value1); // atif
console.log(value2); // raza


// let { firstName, lastName } = array;
// console.log(firstName, lastName); //atif Raza

let { firstName: x, lastName: y } = array;
console.log(x, y); //atif Raza


// Nested Destructuring

const user = [
    {userId: 1, firstName: "salman", lastName: "khan"},
    {userId: 2, firstName: "akshay", lastName: "kumar"},
    {userId: 3, firstName: "sailesh", lastName: "kumar"}
];
const [user1,{firstName},user3] = user;
console.log(user1);
console.log(firstName);
