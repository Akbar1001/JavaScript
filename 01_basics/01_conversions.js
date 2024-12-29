let score=false;
//typeof v_name OR typeof(v_name) method is used to tell the data type of variable
console.log(typeof(score)); 
let val=Number(score);  //Number() is used to convert a given(valid) data type into INT
console.log(typeof val);
console.log(val);
//when the given input is not valid then it's value is Nan->Not a Number but data type is Number
//VAlue of true in Number is 1 and that of false is 0

let k="  "
let valInBoolean=Boolean(k);
console.log(valInBoolean);
//Boolean() is used to convert into Boolean value
/*Every Non-Zero value in converted into True and only 0 and ""(empty string) is converted in false*/