/*let a=this;
console.log(a);
this.name="Priya";
console.log(this.name);
*/
/*
function greet()
{
    console.log(this);
}
greet();


function Person()
{
    this.name="Preethi";
    console.log(this);
}
let person1=new Person();
console.log(person1.name);


let obj=
{
    name:"Priya",native:"Trichy",
    greet()
    {
        console.log(this);
        console.log(this.name);
        function innerFunc()
        {
            console.log(this);
             console.log(this.name);
        }
        innerFunc();
    }
    
}
obj.greet();


const hello=()=>
{
    console.log(this);
}
hello();
*/
let method1=
{
    name:"Ram",
    innerFun1()
    {
        let a= ()=>{
            console.log(this);
        console.log(this.name);
        }
        a();

    }
}

method1.innerFun1();




