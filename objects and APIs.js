console.log("Happy Holi!");
//1 singleton 
//object literals 
//use a symbol as object keys 
//const mysym=Symbol("Key1");
const JsUser={ //object declartion
    name:"Neelima",
    age:18,
    city:"Delhi",
    email:"neelima@gmail.com",
    


}
console.log(JsUser.email); //value access
console.log(JsUser["email"]);//2nd way of accessing value 
console.log(JsUser.name); //value access
//console.log(JsUser[sym]);
JsUser.email="neelima.arun2007@gmail.com";
console.log(JsUser.email);
//object freeze krna 
Object.freeze("gmail");

JsUser.greeting=function (){
    console.log("hello JsUser!");
}
console.log(JsUser.greeting); //only refrence and structure print hoga 
console.log(JsUser.greeting()); //function calling 

JsUser.greeting2=function (){
    console.log(`Hello Js user ${this.name}`);
}
console.log(JsUser.greeting2()); // OP: hello js user neelima 

//declaring throught constructor 
//const tinder =new Object();
const tinder={};
tinder.id="ns@123";
tinder.name="neelima";
tinder.isLoggedIn=false;

//console.log(tinder);

const zomato={
    email:"user@gmail.com",
    fullname:{
        userfullname:{
            firstName: "neelima",
            lastName:"singh"
        }
    }

}
console.log(zomato);
console.log(zomato.fullname.userfullname.firstName); 

//combining objects 
const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
const object3 = {obj1,obj2};
const obj4=Object.assign({},obj1,obj2);
console.log(obj4); // {1:'2',2:'b',3:'a',4:'b'}
console.log(object3); //isme correctly merge nahi hoga 

const course={
    name:"JAVASCRIPT ",
    price:"999",
    Instructor:"hitesh",
}
console.log(course.name);
//new notation to extract object destructure
const {Instructor:inst}=course;
console.log(inst);

//APIs 
//eg of api: randomuserme
//JSON: Javascript object notation
// {
//     "name":"hitesh",
//     "course":"javascript",
//     "price":"free",
// }
[
    {},
    {},
    {},
]
