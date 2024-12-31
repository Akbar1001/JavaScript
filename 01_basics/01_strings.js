//Ways to declare a string in js

let str="Akbar";    // Data type --> STRING
console.log(str[0]);
let s= new String ("asdfg");    // Daata type --> OBJECT
console.log(typeof str);
console.log(typeof s);

// Length
let n=str.length
console.log(`the length of ${str} is : ${n}`);

// To access a character at a particular index mention the index number
console.log(str.charAt(3));

// To access a character's index mention the character
console.log(str.indexOf('b'));
//there many more method you visit the documentations