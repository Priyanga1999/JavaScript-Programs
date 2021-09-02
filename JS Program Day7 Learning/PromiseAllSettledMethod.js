Promise.allSettled([
    Promise.resolve(100),
    new Promise(function (resolve)
    {
        setTimeout(resolve,100,80)
    }),
    1000,
    Promise.reject("Error")
])
.then(function result(value)
{
    console.log(value);
})





