//Object Creation using Literal

const person={
name:"Ram",
age:25,
hobbies:["Drawing","Reading","Playing"],
greet :function()
{
    this.gender="Female";
    console.log("Hello Buddies");
},
score:{maths:99,science:98}
}

console.log(person.name);
console.log(person["name"]);
console.log(person.age);
console.log(person["age"]);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);
person.greet();
console.log(person.score);
console.log(person.score.maths);
console.log(person.score.science);
console.log(person.gender);