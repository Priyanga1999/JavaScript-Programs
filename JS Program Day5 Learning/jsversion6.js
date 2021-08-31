//JavaScript Map Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};
const fruits = new Map();
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
console.log(fruits);


//JavaScript Set Objects
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);
console.log(letters.size);

//JavaScript Classes
class Mobile
{
    constructor(brand,rate)
    {
        this.brand=brand;
        this.rate=rate;
        console.log(this.brand);
        console.log(this.rate);
        
    }
    
    
}
const obj=new Mobile("Redmi",13000);




let myPromise=new Promise(function(Resolve,Reject)
{
    let x=0;
    if(x==0)
    {
        Resolve("OK");
    }
    else
    {
        Reject("error");

    }
});
myPromise.then(
    function(value){mydisplay(value);},
    function(error){mydisplay(error);}
);
function mydisplay(data)
{
console.log(data);
}

//Function Rest Parameter
function fun(...args)
{
    var sum=0;
    for(var i of args)
    {
        sum+=i;
    }
    return sum;

}
let result=fun(1,2,3,3,4);
console.log(result);


    
    
