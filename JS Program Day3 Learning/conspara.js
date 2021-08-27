function Person(name,age,gender)
{
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.greet=function()
    {
        console.log("Hi "+this.name);
    }
}

const person1=new Person("Ram",29,"Male");
const person2=new Person("Priya",25,"Female");
console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);
person1.greet();
console.log(person2.name);
console.log(person2.age);
console.log(person2.gender);
person2.greet();