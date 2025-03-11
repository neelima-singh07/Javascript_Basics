let score="33";
console.log(typeof score);
let valueInNumber=Number(score); //typecast to number
console.log(typeof valueInNumber);
//if kissi string jese 33abc isse convert kra to number  agr usse print 
//krvaenge to NaN aeega type number hi aaega 
let val=null;
let newVal=Number(val);
console.log(typeof newVal);
console.log(newVal); //prints 0 

let value=undefined;
let newValue=Number(value);
console.log(newValue); //NaN aaega 

let bool=true;
let boolValue=Number(bool);
console.log( boolValue);//prints 1 

let str="33abc";
//  let strValue=Number(strValue);
//console.log(strValue); //cant convert to string

//"33"=>33
//"33abc"=>NaN
//true=>1

let isLoggedIn = false;
let cov=Boolean(isLoggedIn);

console.log(cov); ////false
//""=>false if conveted to boolean empty string will give false

let Name="neelima";
console.log(Boolean(Name)); //prints true because it contains non-empty character

let emptyStr="";
console.log(Boolean(emptyStr)); //prints false because it is empty string

