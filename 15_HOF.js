function x(fn) {
    fn();
}
function y() {
    console.log("Inside y Function");
}
x(y);

//  x is a higer order function
//  y is a callback function


// const data = [10,20,30,40,50];
// const calculateArea = function(radius){
//     const result = [];
//     for(let i = 0; i < data.length;i++){
//         result.push(Math.PI * radius[i]* radius[i]);
//     }
//     return result;
// }

// const calculateCircumference = function(radius){
//     const result = [];
//     for(let i = 0; i < data.length;i++){
//         result.push(2*Math.PI*radius[i]);
//     }
//     return result;
// }
// const calculateDiameter = function(radius){
//     const result = [];
//     for(let i = 0; i < data.length;i++){
//         result.push(2*radius[i]);
//     }
//     return result;
// }
// console.log(calculateArea(data));
// console.log(calculateCircumference(data));
// console.log(calculateDiameter(data));
const area = (radius) => {
    return Math.PI * radius * radius;
}
const circumference = (radius) => {
    return 2 * Math.PI * radius;
}

const data = [10, 20, 30, 40, 50];
const calculate = function (radius, logic) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
        result.push(logic(radius[i]));
    }
    return result;
}

console.log(calculate(data, area))
console.log(calculate(data, circumference));

