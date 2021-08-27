const newData = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}
];
for(let i=0;i<3;i++)
console.log(newData[i]);
let array1=[1,2,3,4];
array1.push(5);
console.log(array1);
array1.unshift(0);
console.log(array1);
array1[2]=20;
console.log(array1);
array1[8]=200;
console.log(array1);
console.log(array1.pop());
console.log(array1);
console.log(array1.shift());
console.log(array1);
console.log(array1.length);
let array2=[9,7,8,3,4];
console.log(array1.concat(array2));
console.log(array2.indexOf(8));
console.log(array2.sort());
let arr = ['h', 'e'];
let arr1 = arr;
arr1.push('l');

console.log(arr); 
console.log(arr1); 
let arr2 = ['h', 'e'];
arr2.name = 'John';

console.log(arr2); 
console.log(arr2.name); 
console.log(arr2['name']); 
let strarr=['apple','orange','banana','guava','lemon'];
console.log(strarr.push('grape'));
console.log(strarr.indexOf('banana'));
console.log(strarr.slice(0,3));
let r=array1.includes(3);
console.log(r);
console.log(array1.slice(4));