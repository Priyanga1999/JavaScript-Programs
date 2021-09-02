let animal={
    eat:true,
    walk()
    {
        console.log("Animal can walk");
    }
}
let rabbit={
    jump:true
}
rabbit.__proto__=animal;
rabbit.walk();
rabbit.walk=function()
{
    console.log("Rabbit can walk");
}
console.log(animal.eat);
console.log(rabbit.eat);
rabbit.walk();