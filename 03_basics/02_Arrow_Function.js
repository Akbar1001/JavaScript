// First understand "THIS" keyword
// "this" keyword used to refer Current context/Scope

const user={
    username: "Akbar",
    id: 4455,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome on this website`); // o/p-> Akbar , welcome on the website
        //for the above "this" keyword the context or scope is Object->user
    }
}
user.welcomeMessage() //calling function welcomeMessage
//Now if we change the username it will consider the modified value

//NOte
// value of "this" keyword in NODE js enviroment is {}(an Empty object).
// value of "this" keyword in console of browser enviroment is Window{} <- window object.

//Syntax of Arrow function
let hello = ()=>{
    console.log("what the time");
}
hello();

// Remember
let sum= (n1,n2)=>{
    return n1+n2;
}
console.log(sum(2,8));  //10
// BUT the above function is same as below function

let add = (n1,n2)=> (n1+n2)
console.log(add(8,9));  // 
// what message it is conveying ifs that when we use parenthesis we use return keyword but when we use small brackets we DONOT use return keyword as it will explicitly return the value or expression inside the small bracket or parenthesis
