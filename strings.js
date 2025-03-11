console.log("Hello world!");
//denoted by "" or '' 
const name="neelima singh ";
let x="singh-neelima07";
console.log(name+x); //concatenation 
//but not a good way its outdated 
//good way is using backticks 
console.log(`Hello My name is ${name}and my github account is ${x}`);

const gameName=new String('super-Mario'); //new object create krna 
console.log(gameName);

//some methods of strings 
console.log(gameName[4]); //access krna elements ko 
console.log(gameName.length); //len nikalna
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase()); //orignal value change nhi hui ha 
console.log(gameName.charAt(4));  //kis idx pr konsa char ha 
console.log(gameName.indexOf('M')); //kis char pr konsa idx ha 

const newVar = gameName.substring(0,4); //op: supe
console.log(newVar);

const newstr=gameName.slice(-8,-4);  //isme -ve values bhi de skte ha op: perM
console.log(newstr);

const newtrim="   neelimaSingh  ";
console.log(newtrim.trim()); //without spaces 
console.log(newtrim);//with spaces
console.log(newtrim.trimStart());
console.log(newtrim.trimEnd());

const url="www.google-ns.com"
console.log(url.replace('google','neelima')); //url me changes 
console.log(url.includes('google')); //includes or not 
console.log(gameName.split('-')); //return ann array after spliiting on basis of '-'







