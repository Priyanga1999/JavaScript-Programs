const reg1=/abc/;
console.log(reg1);
const reg2=new RegExp("abc");
console.log(reg2);
const reg3=new RegExp(/p.....i/);
console.log(reg3.test("preethi"));


var string1="Find book";
var pattern=/book/;
console.log(string1.search(pattern));

console.log(string1.replace(pattern,"pen immediately"));

var reg4=/[\s,]+/;
console.log(string1.split(reg4));

const string = 'Hello hello hello';


const result1 = string.replace(/hello/, 'world');
console.log(result1); 
const result2 = string.replace(/hello/g, 'world');
console.log(result2); 
const result3 = string.replace(/hello/i, 'world');
console.log(result3); 
const result4 = string.replace(/hello/gi, 'world');
console.log(result4); 