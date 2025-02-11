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