const array1 = [1,2,3];
const array2 = [5,6,7]; 

const newArray = [...array1,...array2];
const array = [..."abc"];
console.log(array);
console.log(newArray);

let obj = {
    key1:"value1",
    key2:"value2"
}
let obj1 = {
    key3:"value1",
    key4:"value2"
}
console.log(obj);
let newObj = {...obj,...obj1};
console.log(newObj);