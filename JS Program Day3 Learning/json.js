const person={
    name:"Ram",
    age:25,
    id:undefined,
    id1:null,
    hobbies:["Drawing","Reading","Playing"],
    greet :function()
    {
        this.gender="Female";
        console.log("Hello Buddies");
    },
    score:{maths:99,science:98}
    }

let newjson=JSON.stringify(person);
console.log(typeof(newjson));
console.log(newjson);


let newjson2=JSON.parse(newjson);
console.log(typeof(newjson2));
console.log(newjson2);
