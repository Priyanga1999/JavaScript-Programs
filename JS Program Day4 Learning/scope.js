let a=5;
function greet()
{
    a="Hello Welcome";
}
console.log(a);
greet();
console.log(a);

let globalVar=8;
function fun()
{
    var localVar=10;
    console.log(globalVar+localVar);
}
fun();
