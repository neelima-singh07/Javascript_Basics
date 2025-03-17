const user={
    username:"neelima",
    price:999,
    welcomeMessage:function(){
        console.log(`Welcome to my webiste ${this.username}`); //lekin yaha ${} se access ni krna chaiye this use krna chaiye for current context

    }


}
user.welcomeMessage();
username="Rajat";
user.welcomeMessage(); //lekin this pointer current context use krega OP: neelima hi aayega 
console.log(this); //agr vscode extension pe kroge to alag aaega 
//browser me global event window ha 




const chai=()=>{
    console.log(this); //{} aayega

}
chai();

//ARROW FUNCTION 
//()=>{}
const addtwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(3,4)); //OP:7
//or we can also write it as below  agr {} ha to return likhna hoga agr below wale method se ko to nhi lihna haoga
const addthree=(num1,num2)=>(num1+num2);
console.log(addthree(8,7));

