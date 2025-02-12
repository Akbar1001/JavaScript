//syntax
/*
for(let i=0;i<10;i++){
    console.log(i);
}
    */
/*
while(condition)
{
    //BODY
}*/

/*
let a=[1,3,4,4,5] or s="asdfghjkl"

for ( const x of arr or s)
{
    console.log(x);
}
*/

const lang=["py","js","c++","java","ruby"];
lang.forEach((item)=>{
    console.log(item);
})
//O/P->
/*
py
js
c++
java
ruby
*/

// lang.forEach((item,index,complete_arr)=>{
//     console.log(item,index,complete_arr);
// })

/*
py 0 [ 'py', 'js', 'c++', 'java', 'ruby' ]
js 1 [ 'py', 'js', 'c++', 'java', 'ruby' ]
c++ 2 [ 'py', 'js', 'c++', 'java', 'ruby' ]
java 3 [ 'py', 'js', 'c++', 'java', 'ruby' ]
ruby 4 [ 'py', 'js', 'c++', 'java', 'ruby' ]
*/

const language=[        //Array of objects
    {
        name:"python",
        extension:".py"
    },
    {
        name:"c++",
        extension:".cpp"
    },
    {
        name:"java",
        extension:".java"
    },
    {
        name:"javascript",
        extension:".js"
    }
]

//to traverse this array of object we generaly use for-each loop
language.forEach((item)=>{
    console.log(`name: ${item.name} and extension: ${item.extension}`);
})

// to filter out values from an array into a new array on the basis of a condition

const arr=[1,2,3,4,5,6,7];
const brr=arr.filter((x)=> x>4)  //[ 5, 6, 7 ]
console.log(brr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const mypreference=books.filter( (bk) => bk.edition>2006 && bk.genre=="History");
console.log(mypreference);

//map() -> iterate the array and update each element return the updated elements in the form of array

const num=[1,2,3,4,5,6,7,8,9,10];
const newnum=num
                .map( (x) => x*10 ) // newnum array-> [10,20,30,40,50,60,70,80,90,100]
                .map( (x) => x+2 )  // newnum array-> [12,22,32,42,52,62,72,82,92,102]
                .filter( ( x ) => x>50) // newnum array-> [62,72,82,92,102]

// reduce()
/*
The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

we use when we want to sum/subtract/multiply,divve or any other operations up the array values
return a single value
*/ 
const sum=num.reduce((acc,curval) => acc+curval,100);
console.log(sum);   //155 because sum of num=55  and initial value is 100 
