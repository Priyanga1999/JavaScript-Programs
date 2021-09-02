
// Display Time Every 3 Second
function showTime()
{
    let date=new Date();
    let time=date.toLocaleTimeString();
    console.log(time);
    setTimeout(showTime,3000);
}
showTime();