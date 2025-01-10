const even=[2,4,6,8,10]
const odd=[1,3,5,7,9]
// concat() is used to cancatenate two arrays and return a NEW array of combination
const number=even.concat(odd)   // odd elements are after even elements --> [2,4,6,8,10,1,3,5,7,9]
console.log(number);    
// with concat() we can only concat two two arrays BUT using Spread operator

const all=[...even,...odd,...number];
console.log(all);   // all the arrays get concatenated

// Convert a data set in Array form using this SYntax
const arr=Array.from("Akbar 20/12/2003");
console.log(arr);
/* O/P->
['A', 'k', 'b', 'a', 'r', ' ', '2', '0', '/', '1', '2', '/', '2', '0', '0', '3']
*/
//console.log(Array.from(9089,555,990));  // Error and a Single number as parameter will not gets converted into its digits array

//Array.from(9089,555,990) -> O/P => [] + Error

// Array.from( val ) cannot convert val into Array then it returns an Empty Array-> []

// To covert a set of variavles into array we use Array.of()

let a=2,b="hi",c=true,d=4.5;
