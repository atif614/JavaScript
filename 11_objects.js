// objects in Javascript
//  object store key value pairs
//  objects are reference type
//  objects don't have index
let key = "email";
const person = {
    name: "Atif",
    age: 22,
    address: "Jharkhand",
    skills:["HTML","DSA","SQL"]
}
person[key] = "atif@gmail.com";
console.log(person); 
//{name: 'Atif', age: 22, address: 'Jharkhand', skills: Array(3), email: 'atif@gmail.com'} -> email will added as a new key.


//we can also write key inside double quotation 
const person1 = {
    "name": "Atif",
    "age": 22,
    "address": "Jharkhand",
    "skills":["HTML","DSA","SQL"]
}
person.age = 78;
console.log(person1.age);
console.log(person.skills[2])
console.log(person['age']); // bracket notation
console.log(person.age) // dot notation


// how to iterate object

const person3 = {
    "name": "Atif",
    "age": 22,
    "address": "Jharkhand",
    "skills":["HTML","DSA","SQL"]
}

// 1 for in loop
for(let key in person){
    console.log(`${key}:${person[key]}`); 
}

//Object keys

console.log(Object.keys(person));//['name', 'age', 'address', 'skills']

//computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myValue1";
const value2 = "myValue2";

const obj = {
    [key1] :value1,
    [key2] : value2
}
console.log(obj);
//{objkey1: 'myValue1', objkey2: 'myValue2'}

const obj1 = {};

obj1[key1] = value1;
obj1[key2] = value2;

console.log(obj1);
//{objkey1: 'myValue1', objkey2: 'myValue2'}

// Object Destructuring

const capital = {
     bihar:"Patna",
     punjab:"Amritsar"
};

const var1 = capital.bihar;
const var2 = capital.punjab;
console.log(var1,var2);

const[var3 ,var4] = capital;
console.log(var3,var4);