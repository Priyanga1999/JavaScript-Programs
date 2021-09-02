let age=20;
let id=setInterval(function(){
    age++;
    console.log("Age:"+age);
    if(age==25)
    {
        clearInterval(id);
    }
})