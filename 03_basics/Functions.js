// Function -> Lines of code to perform a specific task
//Enhances Readability and can be used multiple no of times

//               Parameters down there
function func_name(n1,n2) { // Function Defination + Declaration 
    //Body
}

// A void funtion return or have a UNDEFINED
//          function call
console.log(func_name(2,4));   // O/p -> undefined
//                  Arguments above there

// your task is to show a message when user logged in
function userLoggedinSuccesfully(username){
    console.log(`${username} Logged in Succesfully `);
}
userLoggedinSuccesfully("Akbar"); 
userLoggedinSuccesfully();//O/p-> Undefined Logged in successfully 
// ->when we donot pass any value to parameter it takes Undefined as value

function userLoggedinSuccesfully(username){
    if( !username  /*Or u can write-> username === undefined*/ ){
        console.log("Please enter a username");
    }
    else{
    console.log(`${username} Logged in Succesfully `);
    }
}
userLoggedinSuccesfully();//O/p-> "Please enter a username"

// if we pass variable no of Arguments then how to collect them in single entity
// we use " spread operator" to store these 'n' values in an Array,below is the syntax
// these 'n' values can any data type
function Cart(...prices){
   let totalCost=0
   for(let i =0;i<prices.length;i++)
        totalCost+=prices[i]
   return totalCost
}

console.log(`Total Bill Amount is ${Cart(200,55,784,66)}`);

// Edge case-> if take parametrs before spread operator then those parameters will take the corresponding values and rest values are taken by spread operator
function Cart(val1,val2,...prices){
    console.log(prices);
    console.log(val1,val2);  
 }
Cart(200,55,784,66) //O/p-> [ 784, 66 ]
                    //200 55

// Passing object as argument in function
const user={
    username : "Akbar",
    id: 4556,
    prices:7766
}
function handleObject(userObject){
    console.log(`${userObject.username} has ID :${userObject.id} `);
    console.log(`Total Bill Amount is : ${userObject.prices}`);
}
handleObject(user)
/*O/p-> Akbar has ID :4556 
        Total Bill Amount is : 7766 */
//Passing Array as Argument
function tryArray(arr){
    return arr.length
}
console.log(tryArray([1,5,true,false,"Hii","uuuu",6.8]));   //O/p -> 7