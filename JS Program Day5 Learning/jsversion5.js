//Reserved Words as Property Names
var obj = {name: "John", new: "yes"}
console.log(obj.new);

//Array.isArray()
let arr=[1,2,3,4,5];
console.log(Array.isArray(arr));

//Array.forEach()
let array1=["apple","banana","carrot","deer"];
array1.forEach(myFunction1);
function myFunction1(value)
{
    console.log(value);
}

//Array.map()
let number1=[1,2,3,4,5];
let number2=number1.map(myFunction2);
console.log(number2);
function myFunction2(value)
{
    return value*2;
}

//Array.filter()
let number3=[10,22,30,40,50];
let number4=number3.filter(myFunction3);
console.log(number4);
function myFunction3(value)
{
    return value>30;
}

//Array.reduce()
var number5=[8,9,10,11];
var sum=number5.reduce(myFunction4);
console.log(sum);
function myFunction4(total,value)
{
    return total+value;
}

//Array.reduceRight()
var number6=[8,9,10,11];
var mul=number5.reduceRight(myFunction5);
console.log(mul);
function myFunction5(total,value)
{
    return total*value;
}

//Array.every()
var number7 = [45, 4, 9, 16, 25];
var allOver18 = number7.every(myFunction6);
console.log(allOver18);
function myFunction6(value) {
  return value >18;
}

//Array.some()
var number8 = [45, 4, 9, 16, 25];
var allOverSum18 = number8.some(myFunction7);
console.log(allOverSum18);
function myFunction7(value) {
  return value > 10;
}


//Array.lastIndexOf()
var fruits = ["Apple","Banana","Orange", "Apple", "Mango"];
console.log(fruits.lastIndexOf("Apple"));

//JSON.parse()  & JSON.stringify()
const txt = '{"name":"John", "age":30, "city":"New York"}'
console.log(JSON.parse(txt));
console.log(JSON.stringify(txt));

//Date.now()
var timInMSs = Date.now();
console.log(timInMSs);


//Date.toISOString() & Date.toJSON()
const d = new Date();
console.log(d.toISOString());
console.log(d.toJSON());