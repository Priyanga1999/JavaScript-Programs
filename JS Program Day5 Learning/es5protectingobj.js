const object1 = {
    name:"Priya"
};

console.log(Object.isExtensible(object1));
Object.preventExtensions(object1);
console.log(Object.isExtensible(object1));
Object.seal(object1);
object1.name="Preethi";
delete object1.name;
console.log(object1.name);
console.log(Object.isSealed(object1));
Object.freeze(object1);
object1.name="Raj";
console.log(object1.name);
console.log(Object.isFrozen(object1));
