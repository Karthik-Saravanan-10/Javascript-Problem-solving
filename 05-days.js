let day1=new Date("June 14, 2019");
let day2=new Date("June 20, 2019");
let ms=day2-day1;
// day(1)=hour(1*24)=minute(hour*60)=Second(minute*60)=Milliseconds(second*1000)
let answer=((((ms/1000)/60)/60)/24);

console.log(`Days Between - ${answer} days`);