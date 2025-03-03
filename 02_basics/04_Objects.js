const tinder={} //Non-Singleton Object
tinder.id=123
tinder.name="Harry"
tinder.age=23
tinder.isLoggedIn=false
//console.log(tinder);  O/p->{ id: 123, name: 'Harry', age: 23, isLoggedIn: false }
const RegularUser={
    email:"genny@gmail.com",
    fullname:{
        firstname:"Genny",
        midname:"",
        lastname:"Wesley"
    },
    age:21,
    dob: new Date("2002-2-20")
}
// console.log(RegularUser.dob.toDateString())
// console.log(RegularUser.fullname.lastname);
// console.log(RegularUser.fullname.midname);

// Merge two or more Objects into a new object
//1st method (less used)
const obj1={1:"a",2:"b"}
const obj2={2:"c",3:"d"}
const obj3= Object.assign(obj1,obj2);    // key '2' whose value is changed to last '2' key value has 
console.log(obj3); // O/p --> { '1': 'a', '2': 'c', '3': 'd' }
 
// 2nd way( Most Used) = Speard technique
const obj4={...obj1,...obj2};
console.log(obj4);  // O/p -> { '1': 'a', '2': 'c', '3': 'd' }
// If you want to access only the keys or values of Objects
//we use Object.keys(object_name) mehtod
//we use Object.values(object_name) mehtod
// the Return type of above methods is ARRAY
console.log("keys : ");
console.log(Object.keys(tinder));
console.log("values : ");
console.log(Object.values(tinder));

// De-structuring of Objects
const course={
    name:"DSA",
    price:"0",
    instructor:"Akbar"
}
console.log(course.instructor);

// to iterate in objects we use for-in loops

const myobj={
    IN:"India",
    AUS:"Australia",
    NZ:"New zealand",
    ENG:"ENgland"
}
for (const key in myobj){
    // this key will hold only key value 
    // access value of key we use obj_name[key]
    console.log(` keys: ${key} -> value: ${myobj[key]}`);
    
}