//Numbers(datatype) and math 
const score=96;
console.log(score);
console.log(typeof score);
const balance =new Number(100000); //specially number aayega with properties 
console.log(balance);
//PROPERTY

console.log(score.toString().length);
console.log(score.toExponential());
//widely used method : fixed
console.log(score.toFixed(2)); //decimal values  lana 
const x=96.7789;
console.log(x.toPrecision(3));  //return a round off string string  v:imp op: 96.8
const y=1000000000000;
console.log(y.toLocaleString('en-IN')); //commas lage hue aayega  op: 10,00,00,00,00,000
//indian format me kr do convert 


//                 Mathematics 

console.log(Math); //many property for refr inspect the htmlpage 
console.log(Math.abs(-8)); //8
console.log(Math.round(4.3)); //4 
console.log(Math.ceil(9.9));//10
console.log(Math.floor(9.9)); //9
//array ke and lowest value Math.min or max according to the condition

console.log(Math.random()); //iski value 0 and 1 ke beech me always
console.log(Math.random()*10+1);





