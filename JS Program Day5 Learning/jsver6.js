//String.includes()
let text = "Hello world, welcome to the universe.";
console.log(text.includes("to")); 

//String.startsWith()
let text1 = "Hello world, welcome to the universe.";
console.log(text1.startsWith("world"));
console.log(text1.endsWith("universe."));

//Array.from()
console.log(Array.from("Preethi"));

//Array.Keys()
let array1=["Apple","Banana","Orange"];
let key=array1.keys();
for(let i of key)
{
    console.log(i);
}

//Array.find()
let number=[10,20,30,40];
let result=number.find(myFun);
console.log(result);
function myFun(value)
{
    return value>20;
    
}

