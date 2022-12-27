//string indexing
// strings are immmutable
let myName = "AtifRaza";

//  A t i f R a z a
//  0 1 2 3 4 5 6 7 

console.log(myName.length)
console.log(myName[7]);
console.log(myName);

// The split() method splits a string into an array of substrings and returns the new array
console.log(myName.split(''));  //['A', 't', 'i', 'f', 'R', 'a', 'z', 'a']
console.log(myName);

// trim() - Removes the white spaces
let name = "           Atif                ";
console.log(name.length);
// console.log(name.trim()); 
console.log(name.length);


// slice() Method
// start index
// end index

let newString = "Jharkhand";
console.log(newString.slice(0,4));  //jhar
console.log(newString); 