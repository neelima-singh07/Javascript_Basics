console.log("arrays");

const myArr=[1,2,3,4,5,6];//elt can be of diffrent datatype also
console.log(myArr);
console.log(myArr[3]);

//Methods for arrays declaration
const heroes=new Array('Ironman','captain','Thor');
console.log(heroes);
console.log(heroes[0]);

//Methods in arrays 
//1. push : push the first element
heroes.push('MissMarvel');
console.log(heroes);
//-------------------------------------------------------------------------
//2. pop: pop the last element
heroes.pop();
console.log(heroes);
//-------------------------------------------------------------------------
//3 . unshift : unshift the first element like queue
heroes.unshift('superman'); //aage elt add kr deta ha 
console.log(heroes);
//----------------------------------------------------------------
//4. shift: removes first elt like queue
heroes.shift();
console.log(heroes);
//--------------------------------------------------------------------------------
heroes.push('superman');
//5. question methods T/F me ans 
console.log(heroes.includes('captain')); //true
console.log(heroes.indexOf('Ironman')); //exist krega to idx dega yh else -1 
const newh=heroes.join();
console.log(typeof newh); //string me convert kr deta ha 
//------------------------------------------------------------------------

//6. slice , splice 
console.log(heroes);
console.log(heroes.slice(0,2)); //return a slice of array 

console.log(heroes.splice(0,2));
console.log(heroes); //orignal array me hi change kr dega v:imp ha yh 
heroes.push('spiderman');

console.log(heroes);
//slice ends here -----------------------------------------------
const marvel=new Array('IronMan','Captain America','Thor','SpiderMan');
const dc=new Array('Superman','Batman','Aquaman');
console.log(marvel);
console.log(dc);
//console.log(marvel.push(dc)); //array ke andar array aagya merge nahi hua 
console.log(marvel);

//7. concat method to join multiple arrays and return the result

console.log(marvel.concat(dc)); //merge krne ke liye proper

//--------------------------------------------------------------------------
//8. spread method to join multiple arrays and return the result
const all=[...marvel,...dc]; //same kaam kr rha ha most used to merge
console.log(all);

//---------------------9. Flat method used to flatten array -----------------------------------------------------
const array=[1,2,3,[4,5,6],[7,8,9,10]];

console.log(array.flat()); //convert multi dimensional array to single dimensional


//10. isArray

console.log(Array.isArray(array)); //true or false me check kr rha ha array or not

//11. Array.From

console.log(Array.from('hello123')); //['h','e','l','l','o','1','2','3'] me convert string to array
//intresting case
console.log(Array.from({name:"neelima"})); //it return empty array as isse pta ni chlega key ka bnana ha ya elt ka bnana ha 

//12. Array.of

console.log(Array.of(1,2,3,4,5)); //[1,2,3,4,5] me convert elements to array
console.log(Array.of(1,2,3)); //[1,2,3] me convert elements to array
let score=100;
let next=false;
console.log(Array.of(score,next)); 