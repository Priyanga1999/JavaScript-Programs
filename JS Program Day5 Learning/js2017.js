//String Padding
let str="hello";
console.log(str.padStart(8,4));
console.log(str.padEnd(8,4));

// Object Entries
const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };
  console.log(Object.entries(person));
  console.log(Object.values(person));
  console.log(Object.keys(person));

  async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      setTimeout(function() { myResolve("Hello Buddies!!"); }, 3000);
    });
    console.log(await myPromise);
  }
  
  myDisplay();