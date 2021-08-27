let person={
    name:"Priya",

set setName(newName)
{
    this.name=newName;

},
get getName()
{
    return this.name;
}
}
console.log(person.name);
person.setName="Mahi";
console.log(person.getName);