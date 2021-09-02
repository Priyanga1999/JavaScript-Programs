let age=20;
let result=new Promise(function(resolve,reject)
{
    if(age>18)
        resolve("Age is Valid");
    else
        reject("Invalid age");
});
result
.then(function successValue(data)
{
    console.log(data);
})
.catch(function errorValue(data)
{
    console.log(data);
})
.finally(function finalFunction()
{
    console.log("Finally block will always execute");
})