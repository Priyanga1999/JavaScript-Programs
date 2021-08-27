function Person()
{
    this.name="Priya",
    this.age=20
}
Person.prototype.name="Ram";
const person1=new Person();
const person2=new Person();
console.log(person1.name);
console.log(Person.prototype);
Person.prototype.native="Chennai";
console.log(Person.prototype);
console.log(person1.native);
console.log(person2.native);


Person.prototype.greet=function()
{
    console.log("Hi "+this.name);
}
person1.greet();
person2.greet();
Person.prototype={native:"Trichy"};
const person3=new Person();
console.log(person3.native);
console.log(person2.native);
console.log(person1.__proto__);


