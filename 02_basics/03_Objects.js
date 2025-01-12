//An object literal is a list of name:value pairs inside curly braces {}.
//Two ways of dclaring an object , output of both is Same --> {}
const obj={}    //Non-Singleton Object
const obj2= new Object()   //Singleton Object   

//declaring a Symbol data type
const mysym=Symbol("key")

let person={
    firstName:"John",   //The key object is by default considered string  
    lastName:"Doe",      // the IDLE will assume lastName as "lastName"
    age:50,
    [mysym]:"hello",
    eyeColor:"blue",
    11:33,
    true: true  // here key true is considered as String -> "true" despite of being a Keyword
}

// Two of Accessing key value of Objects
console.log(person.age);    //50
console.log(person["age"]); //50
//Using Symbol data type as key
console.log(person[mysym]);
//Overwrite or change the value of keys in object
person.age=40
console.log(person);
// If we want to make our keys Value to remain Constant we freeze our object Using freeze()
Object.freeze(person)
//now if you modify ur key value it wont happen
person.age=33
console.log(person)
