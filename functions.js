console.log("functions");

function add(num1,num2){ //parameter
    console.log(num1+num2);
}
add(2,3); //like py arguements
add("i",3);//op:i3
add(null,5);//op:5 
//isliye chcking imp ha datatype ki 

const res=add(90,67); 
console.log("result",res); //hamesha undefined mein return karega
//but aisa kyu? console ka mtlb sirf print krna 

function add2(num1,num2){
    let res=num1+num2;
    return res;
    //or return num1+num2;

}

const res2=add2(10,20);

console.log("result",res2); // 30 mein return karega

function login(username){ //default parameters ( username="Someone")
    if(!username){ // or username ==undefined
        console.log("Username is required");
        return;
    }
    console.log(`${username} Logged in  Successfully`);

}
login("neelima"); //run ni hua kyuki print ni bola 
console.log(login()); //OP:username requeried
//agr koi value pass hi ni kri to ayega undefined


//LEC-02
function CartPrice(...num1){ //isme para pta hi ni ha kitne ha 
    return num1;
}
console.log(CartPrice(200,400,600,500)); //array return hogi [200,300,.....]

// if (val1,val2...num1) then function call ke time yh val1=200 val2=400 rest =array


function CartPrice2(val1,val2,...num1){ //isme para pta hi ni ha kitne ha 
    return num1;
}
console.log(CartPrice2(200,400,600,500)); //OP: [600,500]

console.log("scope");
//Scope in variables 
//dont use "var" for declaration 
//console jakr scope and code env me scope alag hota ha 
//global scope saare fn ke andr accesss ho skti ha lekin fn ke declared variables ni 
function one(){
    const username="neelima";
    function two(){
        const github="singh-neelima07.github";
        console.log(username); //can access 
    }
    //console.log(github); --> access ni kr skta 
    two();
}
one();

if(true){
    const username="neelima";
    if(username=="neelima"){
        const web=" YouTube";
        console.log(username+web);
    }
}
//---------------------INTRESTING--------------------------------
console.log(addone(5));//humne upr hi call kr diya koi error ni aaya OP:6
function addone(num){
    return num+1;

}
//addone(5);
//addtwo(5); //lekin isko upr call kiya to error aagya
const addtwo=function(num){ //yaha humne function ko store bhi kra ha 
    return num+2;
}
//addtwo(5);
//to iss chiz ka dyan rkhna ha age var me store kra ha to error aayega normal kra ha to ni aayega 
