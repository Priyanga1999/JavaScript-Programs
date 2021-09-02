function increment()
{
    count++;
    console.log(count);
}
let count=0;
let id=setTimeout(increment,3000);
clearTimeout(id);
console.log("setTimeout is stopped");