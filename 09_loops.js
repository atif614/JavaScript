// for loops in array

let fruits = ["Apple", "mango", "grapes", "banana", "oranges", "papaya"];
let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i])
    // fruits2 = fruits[i];
    fruits2.push(fruits[i].toUpperCase());
    // console.log(fruits2);

}

const fruits3 = ["Apple", "mango", "grapes", "banana", "oranges", "papaya"];
fruits3.push("Atif");
// console.log(fruits);

// while loop in array
let i = 0;
while(i < fruits.length){
    // console.log(fruits[i]);
    i++;
}

// for of loop in array

for(let item of fruits){
    console.log(item);
}
console.log("----------------------");
// for in loop in array
for(let index in fruits){
    console.log(fruits[index]);
}