function square(a)
{
   area=a**2;
   //console.log(`Area of Square ${area}`);
   return area;
}
function rectangle(l,b)
{
    area=l*b;
    return area;
    //console.log(`Area of Rectangle ${area}`);

}

let area;
let a=10,l=20,b=10;
let result1=square(a);
console.log("Area of Square "+result1);
let result2=rectangle(l,b);
console.log("Area of Rectangle "+result2);


//program to show the change in global variable
let a1 = "hello";

function greet() {
    a1 = 3;
}

// before the function call
console.log(a1);

//after the function call
greet();
console.log(a1); // 3