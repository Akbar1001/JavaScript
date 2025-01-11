//An object literal is a list of name:value pairs inside curly braces {}.

let person={
    firstName:"John",   //The key object is by default considered string  
    lastName:"Doe",      // the IDLE will assume lastName as "lastName"
    age:50,
    eyeColor:"blue",
    11:33,
    true: true  // here key true is considered as String -> "true" despite of being a Keyword
}

// Two of Accessing key value of Objects
console.log(person.age);    //50
console.log(person["age"]); //50
//Study how to use Symbol data type as key in object
