let promise=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        resolve("Promise Resolved")},300);
    
})
async function myFunction()
{
    try{
    let result=await Promise;
    console.log(result);
    console.log("I'm inside Asynchronous function");
    }
    catch(error)
    {
        console.log(error);
    }
}
myFunction();