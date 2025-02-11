// MAPS in JS

const mp= new Map(); // declaration/intialization of maps

//  add key-values pair in maps
mp.set(1,6);
mp.set('a',8);
mp.set('b',5);
console.log(mp.size);

// to fetch key value
console.log(mp.get('a'));   // 8

// to delete a value
mp.delete('a') // reduces the size by one

// mp.keys() ->return an array of keys in map
// mp.values() ->return an array of values in map
// we can traverse on these array easy with for loop

//Iterating a map
console.log("***********");

const mymap= new Map();
mymap.set('a',1);
mymap.set('b',2);
mymap.set('c',3);
mymap.set('d',4);
mymap.set('e',5);

for( const [key,value] of mymap){
    console.log(` key :${key} & value :${value} `);
} 
// O/P
/*
key :a & value :1 
key :b & value :2 
key :c & value :3 
key :d & value :4 
key :e & value :5  */
