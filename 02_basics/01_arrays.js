//Declaration
let arr=[1,77,3,true,"Hii",7.889] // can have elements of different data type
console.log(arr.length);    // no of elements in array
console.log(arr[-1]);       // Undefined
// arr.push(value)   Adds value at thr last of the array
// console.log(arr.pop());  // removes and returns the last element if array is empty then return undefined 
console.log(arr);
//arr.length=10       // creates empty spots in array
//console.log(arr);   // o/p: [ 1, 2, 3, true, 'Hii', 7.889, <4 empty items> ]
//arr.length=3
//console.log(arr);     // upadate array by takes starting 3 elements

arr.shift("hello"); // Adds value at the start of array and shifts all the elements to right side
console.log(arr.shift()) // delete the first element of array and return the first element from thr updated array or undefined if array becomes empty

let b=[]
//console.log(k);
