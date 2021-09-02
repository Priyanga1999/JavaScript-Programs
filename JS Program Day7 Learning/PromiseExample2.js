let result=new Promise(function(resolve,reject)
{
    resolve("Promise Resolved");
})
result
.then(function function1(data)
{
    console.log(data);
})
.then(function function2()
{
    console.log("You can call multiple functions in this way");
})