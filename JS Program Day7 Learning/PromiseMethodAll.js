let promise1=Promise.resolve(90);
let promise2=50;
let promise3=new Promise(function(resolve,reject)
{
    setTimeout(resolve,1000,"foo");
})
Promise.all([promise1,promise2,promise3]).then(function result(value)
{
    console.log(value);
})