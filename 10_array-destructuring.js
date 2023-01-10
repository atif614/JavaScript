//  array destructuring

let city = ["Delhi","Ranchi","Patna"];
console.log(city);

let x = city[0];
let y = city[1];
let z = city[2];
console.log(x,y,z); //Delhi Ranchi Patna

let [x1,y1,z1] = city;
console.log(x1,y1,z1); //Delhi Ranchi Patna

let [x2, ,y2] = city;
console.log(x2,y2); //Delhi Patna

let [x3, ...y3] = city;
console.log(x3); //Delhi
console.log(y3); //['Ranchi', 'Patna']

console.log(typeof y3)


