//IIFE -> Imediately invoked function Expressions
// we use IIFE usually when we want to execute a function immediately after its defination
//Syntax->
// (function defination) () <- the second parenthesis is the call of first parenthesis

(function fun(){
    console.log("executed");
}
)( ) // act as function call //O/P-> executed

console.log();
// When we want to execute two iife one after the other then the end of 1st iife must end with a semicolon(;)

( ()=>{
    console.log("1st iife");
}
)();

(()=>{
    console.log("2nd iife");
}
)()