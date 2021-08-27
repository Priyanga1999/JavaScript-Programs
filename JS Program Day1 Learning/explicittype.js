//EXPLICITLY TYPECASTING
let result;

result=Number("2");
console.log(result);

result=Number("2e1"-"1");
console.log(result);

result=Number(true);
console.log(result);

result=Number(false);
console.log(result);

result=Number(null);
console.log(result);

result=Number('');
console.log(result);

result=Number("Hello");
console.log(result);

result=Number(undefined);
console.log(result);

result=Number(NaN);
console.log(result);

result=parseInt("200.09");
console.log(result);

result=parseFloat("200.09");
console.log(result);

result=Math.floor("200.09");
console.log(result);

result=+"200.09";
console.log(result);

result=String(123);
console.log(result);

result=String(1+23);
console.log(result);
console.log(typeof(result));

result=String(null);
console.log(result);

result=String(undefined);
console.log(result);

result=String(NaN);
console.log(result);

result=String(true);
console.log(result);

result=String(false);
console.log(result);

result=(123).toString();
console.log(result);

result=true.toString();
console.log(result);

result = Boolean('');
console.log(result);

result = Boolean(0);
console.log(result); 

result = Boolean(undefined);
console.log(result); 

result = Boolean(null);
console.log(result); 

result = Boolean(NaN);
console.log(result); 

result = Boolean(123);
console.log(result); 

result = Boolean('hello');
console.log(result); 

result = Boolean(' ');
console.log(result); 

result=Number('');
console.log(result);
result=Number(' ');
console.log(result);



