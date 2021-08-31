//E5 Object Methods

function Person()
{
    this.name="Priya",
    this.age=21,
    this.id=1
}
let person1=new Person();
Person.prototype.native="Trichy";
console.log(Object.getOwnPropertyDescriptor(person1,'name'));
console.log(Object.getOwnPropertyNames(person1));
console.log(Object.getPrototypeOf(person1));
console.log(Object.keys(person1));

let animal=Object.create(person1);
animal.name="Tiger";
console.log(animal.name);

Object.preventExtensions(person1);
Person.prototype.language="Tamil";
console.log(person1.language);
