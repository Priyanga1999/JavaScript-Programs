function mailValidation()
{
    let mail="preethibe@gmail.com";
    let valid=/\S+@\S+\.\S+/g;

    if(valid.test(mail))
    {
        console.log("Valid mail");
    }
    else{
        console.log("Invalid mail");
    }
}
mailValidation();