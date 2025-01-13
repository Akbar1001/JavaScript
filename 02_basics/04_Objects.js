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
