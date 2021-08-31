//Number Properties
//EPSILON
let x1=Number.EPSILON;
console.log(x1);

//MIN_SAFE_INTEGER
let  x2= Number.MIN_SAFE_INTEGER;
console.log(x2);

//MAX_SAFE_INTEGER
let x3= Number.MAX_SAFE_INTEGER;
console.log(x3);

//Number.isInteger() Method
console.log(Number.isInteger(10));
console.log(Number.isInteger("Hello"));
console.log(Number.isInteger(1000.00));

//Number.isSafeInteger() Method
console.log(Number.isSafeInteger(123));
console.log(Number.isSafeInteger(12390097564312345456789078654321));

//isFinite() Method
console.log(isFinite(10));
console.log(isFinite(1000/0));

//isNaN() Method
let a=10;
console.log(isNaN(a));