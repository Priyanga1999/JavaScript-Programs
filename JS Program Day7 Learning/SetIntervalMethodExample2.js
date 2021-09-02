// program to display time every 5 seconds

function showTime(message)
{
let date=new Date();
let time=date.toLocaleTimeString();
console.log(message+":"+time);
}
setInterval(showTime,5000,"current time");