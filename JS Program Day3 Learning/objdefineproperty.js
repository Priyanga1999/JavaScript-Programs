let person={
    name:"Priya"
}
Object.defineProperty(person,"setName",{
    set:function(newName)
    {
        this.name=newName;
    }
})
Object.defineProperty(person,"getName",{
    get:function()
    {
        return this.name;
    }
})

console.log(person.name);
person.setName="Mahi";
console.log(person.getName);
console.log(person.name);