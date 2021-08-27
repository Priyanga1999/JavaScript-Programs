// program to Create an object using Constructor Function

function Person(){
    this.name="Ram",
    this.age=25,
    this.hobbies=["Drawing","Reading","Playing"],
    this.greet =function()
    {
        console.log("Hello Buddies");
    },
    this.score={maths:99,science:98}
    }
    const person=new Person();
    console.log(person.name);
    const person1=new Person();
    console.log(person1.name);
    console.log(person.age);
    console.log(person.hobbies);
    console.log(person.hobbies[0]);
    console.log(person.hobbies[1]);
    console.log(person.hobbies[2]);
    person.greet();
    console.log(person.score);
    console.log(person.score.maths);
    console.log(person.score.science);