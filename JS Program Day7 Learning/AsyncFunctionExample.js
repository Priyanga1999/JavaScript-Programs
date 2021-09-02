async function myFunction()
{
    console.log("Inside Asynchronous Function");
    return Promise.resolve(100);
}
myFunction().then(function(value)
{
    console.log(value);
})
