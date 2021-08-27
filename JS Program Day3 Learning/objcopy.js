let person={
    name:"Raj",
    age:35
}
console.log(person.name);
console.log(person.age);
let newcopy={};
for(let i in person)
{
    newcopy[i]=person[i];
}
console.log(newcopy.name);
console.log(newcopy.age);
newcopy.name="Preethi";
console.log(newcopy.name);
console.log(person.name);

Object.assign(person,{name:"John"});
console.log(person.name);

let copy1={native:"chennai"};
let copy2={dept:"Quality"};

Object .assign(person,copy1,copy2);
console.log(person.native);

console.log(person.dept);
