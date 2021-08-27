let n=132;
let rev=0;
let rem=0;
while(n>0)
{
    rem=n%10;
    rev=rev*10+rem;
    console.log(rev);
    n=(n/10);
}
